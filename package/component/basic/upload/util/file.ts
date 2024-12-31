function tarHeaderChecksumMatches(buffer: Uint8Array, offset = 0) {
  // 此处是源码，不进行修改
  // @ts-ignore
  const readSum = Number.parseInt(buffer.toString('utf8', 148, 154).replace(/\0.*$/, '').trim(), 8); // Read sum in header

  if (Number.isNaN(readSum)) {
    return false;
  }

  let sum = 8 * 0x20;

  for (let index = offset; index < offset + 148; index++) {
    sum += buffer[index];
  }

  for (let index = offset + 156; index < offset + 512; index++) {
    sum += buffer[index];
  }

  return readSum === sum;
}

export function stringToBytes(str: string) {
  return [...str].map((character) => character.charCodeAt(0));
}

function _check(buffer: Uint8Array, headers: number[]) {
  const options = {
    offset: 0
  };
  for (const [index, header] of headers.entries()) {
    if (header !== buffer[index + options.offset]) {
      return false;
    }
  }
  return true;
}

function typeResult(arrayBuffer: Uint8Array) {
  const buffer = new Uint8Array(arrayBuffer);

  const check = (header: number[]) => _check(buffer, header);

  const checkString = (header: string) => {
    return check(stringToBytes(header));
  };

  if (check([0x52, 0x61, 0x72, 0x21, 0x1a, 0x7])) {
    return {
      ext: 'rar',
      mime: 'application/x-rar-compressed'
    };
  } else if (tarHeaderChecksumMatches(arrayBuffer)) {
    return {
      ext: 'tar',
      mime: 'application/x-tar'
    };
  } else if (check([0xfd, 0x37, 0x7a, 0x58, 0x5a, 0x00])) {
    return {
      ext: 'xz',
      mime: 'application/x-xz'
    };
  } else if (check([0x37, 0x7a, 0xbc, 0xaf, 0x27, 0x1c])) {
    return {
      ext: '7z',
      mime: 'application/x-7z-compressed'
    };
  } else if (check([0x1f, 0x8b, 0x8])) {
    return {
      ext: 'gz',
      mime: 'application/gzip'
    };
  } else if (checkString('MSCF') || checkString('ISc(')) {
    return {
      ext: 'cab',
      mime: 'application/vnd.ms-cab-compressed'
    };
  } else if (checkString('!<arch>')) {
    return {
      ext: 'ar',
      mime: 'application/x-unix-archive'
    };
  }

  return undefined;
}

function getTypeAsync(file: Blob) {
  return new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      let fileType = typeResult(reader.result as Uint8Array);
      resolve((fileType && fileType.mime) || undefined);
    };
    reader.readAsArrayBuffer(file);
  });
}

export async function getFileTypeAsync(file: Blob) {
  let type = await getTypeAsync(file);
  if (!type) {
    type = file.type;
  }
  return type;
}
