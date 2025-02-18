import pinyin from 'pinyin';

// 支持拼音搜索
export function searchContent(input: string, label: any) {
  const inputPinyin = pinyin(input.toLowerCase(), { style: 'NORMAL' }).join();
  const OptionLabelPinyin = pinyin(label.toLowerCase(), { style: 'NORMAL' }).join();
  return OptionLabelPinyin.indexOf(inputPinyin) >= 0;
}
