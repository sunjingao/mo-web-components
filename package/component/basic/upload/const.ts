// 图片
const IMG = {
  maxSize: 5242880, // 5m
  errorTip: '图片大小不能大于5M；仅支持image/png、image/jpeg格式！',
  content: ['image/png', 'image/jpeg']
};

// 文档
const DOC = {
  maxSize: 52428800, // 50m
  errorTip: '文档大小不能大于50M；仅支持msword、document、excel、sheet、powerpoint、pdf格式！',
  content: [
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/pdf'
  ]
};

// 视频
const VIDEO = {
  maxSize: 157286400, // 150m
  errorTip: '视频大小不能大于150M；仅支持mp4格式！',
  content: ['video/mp4']
};

// 压缩包
const PACK = {
  maxSize: 209715200, // 200m
  errorTip: '资源文件大小不能大于500M；仅支持zip、rar、7z、tar、gzip格式！',
  content: [
    'application/x-zip-compressed',
    'application/x-rar-compressed',
    'application/zip',
    'application/x-7z-compressed',
    'application/vnd.ms-cab-compressed',
    'application/x-unix-archive',
    'application/x-tar',
    'application/gzip'
  ]
};

const FILE_TYPE_MAP = {
  1: IMG,
  2: DOC,
  3: VIDEO,
  4: PACK
};

export { DOC, IMG, VIDEO, PACK, FILE_TYPE_MAP };
