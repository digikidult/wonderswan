/* Each release variant owns its download metadata and SHA-256 values. */
window.PROJECTS = [
  {
    "id": "ver-ws",
    "summary": "暴龍機玩法",
    "description": "詳細介紹待補充。",
    "stage": "完成",
    "build": "Ver WS+ TC · evolution-fix6",
    "theme": "amber",
    "notes": [
      {
        "title": "Ver WS+ TC · evolution-fix6",
        "text": "增加圖鑑（主畫面按 Start+A+B）\n加入完全體／究極體進化條件判定（育成畫面按 Start+A）"
      },
      {
        "title": "Ver WS+ TC · 補丁可下載",
        "text": "翻譯數碼獸名及物品名，改用英文輸入；加入圖鑑（主畫面按 Start+A+B）。"
      }
    ],
    "next": "-",
    "verifiedRelease": {
      "ownerApproved": true,
      "version": "Ver WS+ TC · evolution-fix6",
      "format": "IPS",
      "url": "downloads/Ver.WS.ips",
      "verifiedOn": "2026-10-27",
      "baseROM": "Digital Monster Ver. WonderSwan（請核對原版 SHA-256）",
      "baseChecksum": "SHA-256: 381fe81bfd607408e313ce9726b088568343fc7c867c8273e636f1200a19b2a2",
      "notes": "evolution-fix6：翻譯數碼獸名及物品名，改用英文輸入；增加圖鑑（主畫面按 Start+A+B），加入完全體／究極體進化條件判定（育成畫面按 Start+A）。"
    },
    "number": "01",
    "title": "Ver.WS",
    "fullTitle": "Digital Monster Ver. WonderSwan",
    "subtitle": "數碼暴龍 Ver. WonderSwan",
    "label": "完成 · 可下載",
    "status": "completed",
    "devStatus": "完成",
    "enhancement": "Yes",
    "cover": "assets/covers/ver-ws.jpg",
    "translationScope": "數碼獸名、物品名、轉英文輸入",
    "enhancementDetails": "增加圖鑑（主畫面按 Start+A+B）\n加入完全體／究極體進化條件判定（育成畫面按 Start+A）",
    "knownIssues": "NA",
    "testing": "Done",
    "releaseStatus": "可下載",
    "releaseDate": "",
    "releaseNotes": "",
    "patchInstructions": "先備份原版遊戲及存檔。核對原版 SHA-256 後，使用支援 IPS 的工具套用 Ver.WS.ips，再核對 Patch 後 SHA-256。IPS 檔校驗碼對應補丁本身。",
    "credits": "",
    "sha256": {
      "original": "381fe81bfd607408e313ce9726b088568343fc7c867c8273e636f1200a19b2a2",
      "ips": "14f8f934ffc73b998fb7ac6316aa9bfd68c3d51ba4b024e8ded6494edff07e69",
      "patched": "f1d20c8783b1e13073232b501aa01e7399411c4cbe0d4ecc42310c64bcd37eea"
    },
    "releaseVariants": [
      {
        "id": "traditional",
        "label": "繁中版",
        "release": null,
        "sha256": {
          "original": "381fe81bfd607408e313ce9726b088568343fc7c867c8273e636f1200a19b2a2",
          "ips": "",
          "patched": ""
        }
      },
      {
        "id": "enhanced",
        "label": "繁中升級版",
        "release": {
          "ownerApproved": true,
          "version": "Ver WS+ TC · evolution-fix6",
          "format": "IPS",
          "url": "downloads/Ver.WS.ips",
          "verifiedOn": "2026-10-27",
          "baseROM": "Digital Monster Ver. WonderSwan（請核對原版 SHA-256）",
          "baseChecksum": "SHA-256: 381fe81bfd607408e313ce9726b088568343fc7c867c8273e636f1200a19b2a2",
          "notes": "evolution-fix6：翻譯數碼獸名及物品名，改用英文輸入；增加圖鑑（主畫面按 Start+A+B），加入完全體／究極體進化條件判定（育成畫面按 Start+A）。"
        },
        "sha256": {
          "original": "381fe81bfd607408e313ce9726b088568343fc7c867c8273e636f1200a19b2a2",
          "ips": "14f8f934ffc73b998fb7ac6316aa9bfd68c3d51ba4b024e8ded6494edff07e69",
          "patched": "f1d20c8783b1e13073232b501aa01e7399411c4cbe0d4ecc42310c64bcd37eea"
        }
      }
    ],
    "defaultVariant": "enhanced"
  },
  {
    "id": "anode-tamer",
    "number": "02",
    "title": "陽極馴獸師",
    "fullTitle": "Digimon Adventure: Anode Tamer",
    "subtitle": "數碼暴龍大冒險 陽極馴獸師",
    "label": "翻譯內容定稿 · 待 UAT",
    "status": "progress",
    "stage": "翻譯內容定稿",
    "build": "Ver. TBB v1a",
    "theme": "amber",
    "cover": "assets/covers/anode.jpg",
    "summary": "秋山遼傳第一集 (陽極版)",
    "description": "Anode Tamer 香港繁體中文翻譯計劃。Ver. TBB v1a 翻譯內容已定稿，目前仍待 UAT；此進度不代表補丁已公開發佈。",
    "notes": [
      {
        "title": "Ver. TBB v1a · 翻譯內容定稿",
        "text": "翻譯內容已定稿，等待用戶驗收測試（UAT）。未發佈。"
      }
    ],
    "next": "完成 UAT，處理測試問題，再確認發佈安排。尚未公佈發佈日期。",
    "verifiedRelease": null,
    "devStatus": "開發中",
    "enhancement": "Yes",
    "translationScope": "TVB譯名體驗",
    "enhancementDetails": "V龍獸及限定技 加容量上限",
    "knownIssues": "",
    "testing": "",
    "releaseStatus": "未發佈",
    "releaseDate": "",
    "releaseNotes": "",
    "patchInstructions": "",
    "credits": "",
    "sha256": {
      "original": "",
      "ips": "",
      "patched": ""
    },
    "releaseVariants": [
      {
        "id": "traditional",
        "label": "繁中版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      },
      {
        "id": "enhanced",
        "label": "繁中升級版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      }
    ],
    "defaultVariant": "traditional"
  },
  {
    "id": "cathode-tamer",
    "number": "03",
    "title": "陰極馴獸師",
    "fullTitle": "Digimon Adventure: Cathode Tamer",
    "subtitle": "數碼暴龍大冒險 陰極馴獸師",
    "label": "翻譯內容定稿 · 待 UAT",
    "status": "progress",
    "stage": "翻譯內容定稿",
    "build": "Ver. TBB v1c",
    "theme": "violet",
    "cover": "assets/covers/cathode.jpg",
    "summary": "秋山遼傳第一集 (陰極版)",
    "description": "Cathode Tamer 香港繁體中文翻譯計劃。Ver. TBB v1c 翻譯內容已定稿，下一步為 UAT 及處理測試問題；尚未發佈。",
    "notes": [
      {
        "title": "Ver. TBB v1c · 翻譯內容定稿",
        "text": "翻譯內容已定稿；完成 UAT 及處理測試問題後再確認發佈安排。"
      }
    ],
    "next": "完成 UAT，處理測試問題，再確認發佈安排。尚未公佈發佈日期。",
    "verifiedRelease": null,
    "devStatus": "開發中",
    "enhancement": "Yes",
    "translationScope": "TVB譯名體驗",
    "enhancementDetails": "V龍獸及限定技 加容量上限",
    "knownIssues": "",
    "testing": "",
    "releaseStatus": "未發佈",
    "releaseDate": "",
    "releaseNotes": "",
    "patchInstructions": "",
    "credits": "",
    "sha256": {
      "original": "",
      "ips": "",
      "patched": ""
    },
    "releaseVariants": [
      {
        "id": "traditional",
        "label": "繁中版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      },
      {
        "id": "enhanced",
        "label": "繁中升級版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      }
    ],
    "defaultVariant": "traditional"
  },
  {
    "id": "digital-partner",
    "summary": "未有計劃；詳細項目資料待補充。",
    "description": "詳細介紹待補充。",
    "stage": "未有計劃",
    "build": null,
    "theme": "amber",
    "notes": [],
    "next": "下一步安排待補充。",
    "verifiedRelease": null,
    "number": "04",
    "title": "Digital Partner",
    "fullTitle": "Digimon Adventure 02: Digital Partner",
    "subtitle": "Digimon Adventure 02: Digital Partner",
    "label": "未有計劃",
    "status": "no-plans",
    "devStatus": "未有計劃",
    "enhancement": "—",
    "cover": "assets/covers/partner.jpg",
    "translationScope": "",
    "enhancementDetails": "",
    "knownIssues": "",
    "testing": "",
    "releaseStatus": "待確認",
    "releaseDate": "",
    "releaseNotes": "",
    "patchInstructions": "",
    "credits": "",
    "sha256": {
      "original": "",
      "ips": "",
      "patched": ""
    },
    "releaseVariants": [
      {
        "id": "traditional",
        "label": "繁中版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      },
      {
        "id": "enhanced",
        "label": "繁中升級版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      }
    ],
    "defaultVariant": "traditional"
  },
  {
    "id": "tag-tamers",
    "number": "05",
    "title": "雙人馴獸師",
    "fullTitle": "Digimon Adventure 02: Tag Tamers",
    "subtitle": "數碼暴龍大冒險02 雙人馴獸師",
    "label": "開發中",
    "status": "progress",
    "stage": "香港中文翻譯進行中",
    "build": null,
    "theme": "teal",
    "cover": "assets/covers/tag.jpg",
    "summary": "秋山遼傳第二集",
    "description": "Digimon Adventure 02: Tag Tamers 香港繁體中文翻譯進行中。未公佈完成比例、公開測試或正式發佈日期。",
    "notes": [
      {
        "title": "開發狀態 / Development",
        "text": "香港中文翻譯進行中。沒有已核實的公開 IPS 補丁下載。"
      }
    ],
    "next": "繼續翻譯工作，並在有確認資料時更新項目進度。",
    "verifiedRelease": null,
    "devStatus": "開發中",
    "enhancement": "—",
    "translationScope": "",
    "enhancementDetails": "",
    "knownIssues": "",
    "testing": "",
    "releaseStatus": "未發佈",
    "releaseDate": "",
    "releaseNotes": "",
    "patchInstructions": "",
    "credits": "",
    "sha256": {
      "original": "",
      "ips": "",
      "patched": ""
    },
    "releaseVariants": [
      {
        "id": "traditional",
        "label": "繁中版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      },
      {
        "id": "enhanced",
        "label": "繁中升級版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      }
    ],
    "defaultVariant": "traditional"
  },
  {
    "id": "d1-tamers",
    "summary": "秋山遼傳第三集",
    "description": "詳細介紹待補充。",
    "stage": "未開始",
    "build": null,
    "theme": "teal",
    "notes": [],
    "next": "下一步安排待補充。",
    "verifiedRelease": null,
    "number": "06",
    "title": "D-1馴獸師",
    "fullTitle": "Digimon Adventure 02: D1 Tamers",
    "subtitle": "數碼暴龍大冒險02 D-1馴獸師",
    "label": "未開始",
    "status": "not-started",
    "devStatus": "未開始",
    "enhancement": "—",
    "cover": "assets/covers/d1.jpg",
    "translationScope": "",
    "enhancementDetails": "",
    "knownIssues": "",
    "testing": "",
    "releaseStatus": "待確認",
    "releaseDate": "",
    "releaseNotes": "",
    "patchInstructions": "",
    "credits": "",
    "sha256": {
      "original": "",
      "ips": "",
      "patched": ""
    },
    "releaseVariants": [
      {
        "id": "traditional",
        "label": "繁中版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      },
      {
        "id": "enhanced",
        "label": "繁中升級版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      }
    ],
    "defaultVariant": "traditional"
  },
  {
    "id": "digimon-medley",
    "summary": "重現經典TV劇情",
    "description": "詳細介紹待補充。",
    "stage": "未開始",
    "build": null,
    "theme": "amber",
    "notes": [],
    "next": "下一步安排待補充。",
    "verifiedRelease": null,
    "number": "07",
    "title": "Medley",
    "fullTitle": "Digimon Tamers: Digimon Medley",
    "subtitle": "數碼暴龍03馴獸師之王：數碼組曲（暫譯）",
    "label": "未開始",
    "status": "not-started",
    "devStatus": "未開始",
    "enhancement": "—",
    "cover": "assets/covers/medley.jpg",
    "translationScope": "",
    "enhancementDetails": "",
    "knownIssues": "",
    "testing": "",
    "releaseStatus": "待確認",
    "releaseDate": "",
    "releaseNotes": "",
    "patchInstructions": "",
    "credits": "",
    "sha256": {
      "original": "",
      "ips": "",
      "patched": ""
    },
    "releaseVariants": [
      {
        "id": "traditional",
        "label": "繁中版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      },
      {
        "id": "enhanced",
        "label": "繁中升級版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      }
    ],
    "defaultVariant": "traditional"
  },
  {
    "id": "veedramon-version",
    "summary": "英文彩色版秋山遼傳第一集",
    "description": "詳細介紹待補充。",
    "stage": "未開始",
    "build": null,
    "theme": "violet",
    "notes": [],
    "next": "下一步安排待補充。",
    "verifiedRelease": null,
    "number": "08",
    "title": "陽陰極馴獸師英文版",
    "fullTitle": "Digimon Anode/Cathode Tamer: Veedramon Version",
    "subtitle": "數碼暴龍大冒險 陽／陰極馴獸師V龍獸版",
    "label": "未開始",
    "status": "not-started",
    "devStatus": "未開始",
    "enhancement": "TBC",
    "cover": "assets/covers/veedramon.png",
    "translationScope": "",
    "enhancementDetails": "",
    "knownIssues": "",
    "testing": "",
    "releaseStatus": "待確認",
    "releaseDate": "",
    "releaseNotes": "",
    "patchInstructions": "",
    "credits": "",
    "sha256": {
      "original": "",
      "ips": "",
      "patched": ""
    },
    "releaseVariants": [
      {
        "id": "traditional",
        "label": "繁中版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      },
      {
        "id": "enhanced",
        "label": "繁中升級版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      }
    ],
    "defaultVariant": "traditional"
  },
  {
    "id": "battle-spirit",
    "summary": "即時對戰 1-3代色",
    "description": "詳細介紹待補充。",
    "stage": "未開始",
    "build": null,
    "theme": "teal",
    "notes": [],
    "next": "下一步安排待補充。",
    "verifiedRelease": null,
    "number": "09",
    "title": "格鬥之王",
    "fullTitle": "Digimon Tamers: Battle Spirit",
    "subtitle": "數碼暴龍03馴獸師之王：格鬥之王",
    "label": "未開始",
    "status": "not-started",
    "devStatus": "未開始",
    "enhancement": "—",
    "cover": "assets/covers/battle.jpg",
    "translationScope": "小量翻譯加港版Logo保育",
    "enhancementDetails": "",
    "knownIssues": "",
    "testing": "",
    "releaseStatus": "檔案準備中",
    "releaseDate": "",
    "releaseNotes": "",
    "patchInstructions": "",
    "credits": "",
    "sha256": {
      "original": "",
      "ips": "",
      "patched": ""
    },
    "releaseVariants": [
      {
        "id": "traditional",
        "label": "繁中版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      },
      {
        "id": "enhanced",
        "label": "繁中升級版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      }
    ],
    "defaultVariant": "traditional"
  },
  {
    "id": "brave-tamer",
    "summary": "秋山遼傳第最終章",
    "description": "詳細介紹待補充。",
    "stage": "未開始",
    "build": null,
    "theme": "amber",
    "notes": [],
    "next": "下一步安排待補充。",
    "verifiedRelease": null,
    "number": "10",
    "title": "聖龍之旅",
    "fullTitle": "Digimon Tamers: Brave Tamer",
    "subtitle": "數碼暴龍03馴獸師之王：聖龍之旅",
    "label": "未開始",
    "status": "not-started",
    "devStatus": "未開始",
    "enhancement": "Yes",
    "cover": "assets/covers/brave.jpg",
    "translationScope": "",
    "enhancementDetails": "",
    "knownIssues": "",
    "testing": "",
    "releaseStatus": "待確認",
    "releaseDate": "",
    "releaseNotes": "",
    "patchInstructions": "",
    "credits": "",
    "sha256": {
      "original": "",
      "ips": "",
      "patched": ""
    },
    "releaseVariants": [
      {
        "id": "traditional",
        "label": "繁中版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      },
      {
        "id": "enhanced",
        "label": "繁中升級版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      }
    ],
    "defaultVariant": "traditional"
  },
  {
    "id": "card-game-wsc",
    "summary": "舊DCG遊戲作品",
    "description": "詳細介紹待補充。",
    "stage": "未有計劃",
    "build": null,
    "theme": "violet",
    "notes": [],
    "next": "下一步安排待補充。",
    "verifiedRelease": null,
    "number": "11",
    "title": "卡遊Ver. WS",
    "fullTitle": "Digital Monster Card Game Ver. WSC",
    "subtitle": "數碼暴龍卡牌遊戲 Ver. WS",
    "label": "未有計劃",
    "status": "no-plans",
    "devStatus": "未有計劃",
    "enhancement": "—",
    "cover": "assets/covers/card.jpg",
    "translationScope": "",
    "enhancementDetails": "",
    "knownIssues": "",
    "testing": "",
    "releaseStatus": "待確認",
    "releaseDate": "",
    "releaseNotes": "",
    "patchInstructions": "",
    "credits": "",
    "sha256": {
      "original": "",
      "ips": "",
      "patched": ""
    },
    "releaseVariants": [
      {
        "id": "traditional",
        "label": "繁中版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      },
      {
        "id": "enhanced",
        "label": "繁中升級版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      }
    ],
    "defaultVariant": "traditional"
  },
  {
    "id": "battle-spirit-15",
    "summary": "即時對戰 更多角色",
    "description": "詳細介紹待補充。",
    "stage": "完成",
    "build": null,
    "theme": "teal",
    "notes": [],
    "next": "下一步安排待補充。",
    "verifiedRelease": null,
    "number": "12",
    "title": "格鬥之王1.5",
    "fullTitle": "Digimon Tamers: Battle Spirit Ver. 1.5",
    "subtitle": "數碼暴龍03馴獸師之王：格鬥之王1.5",
    "label": "完成",
    "status": "completed",
    "devStatus": "完成",
    "enhancement": "—",
    "cover": "assets/covers/battle15.jpg",
    "translationScope": "小量翻譯加港版Logo保育",
    "enhancementDetails": "",
    "knownIssues": "",
    "testing": "",
    "releaseStatus": "待確認",
    "releaseDate": "",
    "releaseNotes": "",
    "patchInstructions": "",
    "credits": "",
    "sha256": {
      "original": "",
      "ips": "",
      "patched": ""
    },
    "releaseVariants": [
      {
        "id": "traditional",
        "label": "繁中版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      },
      {
        "id": "enhanced",
        "label": "繁中升級版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      }
    ],
    "defaultVariant": "traditional"
  },
  {
    "id": "d-project",
    "summary": "育成+RPG",
    "description": "詳細介紹待補充。",
    "stage": "未開始",
    "build": null,
    "theme": "amber",
    "notes": [],
    "next": "下一步安排待補充。",
    "verifiedRelease": null,
    "number": "13",
    "title": "D計劃",
    "fullTitle": "Digital Monster: D-Project",
    "subtitle": "數碼暴龍D-Project",
    "label": "未開始",
    "status": "not-started",
    "devStatus": "未開始",
    "enhancement": "—",
    "cover": "assets/covers/dproject.jpg",
    "translationScope": "",
    "enhancementDetails": "",
    "knownIssues": "",
    "testing": "",
    "releaseStatus": "待確認",
    "releaseDate": "",
    "releaseNotes": "",
    "patchInstructions": "",
    "credits": "",
    "sha256": {
      "original": "",
      "ips": "",
      "patched": ""
    },
    "releaseVariants": [
      {
        "id": "traditional",
        "label": "繁中版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      },
      {
        "id": "enhanced",
        "label": "繁中升級版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      }
    ],
    "defaultVariant": "traditional"
  },
  {
    "id": "battle-spirit-frontier",
    "summary": "即時對戰 04角色",
    "description": "詳細介紹待補充。",
    "stage": "開發中",
    "build": null,
    "theme": "violet",
    "notes": [],
    "next": "下一步安排待補充。",
    "verifiedRelease": null,
    "number": "14",
    "title": "格鬥之王2.0",
    "fullTitle": "Battle Spirit: Digimon Frontier",
    "subtitle": "格鬥之王：數碼暴龍04無限地帶",
    "label": "開發中",
    "status": "progress",
    "devStatus": "開發中",
    "enhancement": "—",
    "cover": "assets/covers/frontier.jpg",
    "translationScope": "",
    "enhancementDetails": "",
    "knownIssues": "",
    "testing": "",
    "releaseStatus": "待確認",
    "releaseDate": "",
    "releaseNotes": "",
    "patchInstructions": "",
    "credits": "",
    "sha256": {
      "original": "",
      "ips": "",
      "patched": ""
    },
    "releaseVariants": [
      {
        "id": "traditional",
        "label": "繁中版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      },
      {
        "id": "enhanced",
        "label": "繁中升級版",
        "release": null,
        "sha256": {
          "original": "",
          "ips": "",
          "patched": ""
        }
      }
    ],
    "defaultVariant": "traditional"
  }
];
