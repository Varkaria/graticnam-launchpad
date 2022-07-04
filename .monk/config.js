const config = {
  //Dangerous it's will replace all arabic numbers to thai numbers (0123456789 -> ๐๑๒๓๔๕๖๗๘๙)) may it make your code broken
  thaiLover: false,
  //Dangerous it's will add holy header to every unknown files and make your some file broken
  veryHoly: false,
  //Monk will ingore this (regex)
  ignore: [
      /^\.monk/,
      /^.gitingore/,
      /^readme.md'/,
      /^.prettierignore/,
      /^*.mp3/
  ]
}
module.exports = config;