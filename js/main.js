const socket = io('http://localhost:3001/')

const mapsDatad = [
    {
        id: 0,
        backgroundColor: 'lightblue',
        size: { width: 2000, height: 2000 },
        characters: [
            { 
                id: 'character1', position: { top: 0, left: 0 }, color: 'red' 
            }
        ],
        objects: [
            { 
                size: { width: 80, height: 80 }, 
                position: { top: 200, left: 200 }, color: 'orange' 
            }
        ],
        enemies: [
             {
                level: 1, experience: 0, id:0, 

                armor: 0, maxMana: 300, mana: 0, // in-game

                hpGear: 0, dameGear: 0, armorGear: 0, // trang bị

                get hpLv() { return 100 + (this.level - 1) * 20 },
                get dameLv() { return 20 + (this.level - 1) * 10 },
                get armorLv() { return 3 + (this.level - 1) * 2 },
                get maxHealth() { return this.hpGear + this.hpLv },
                get maxDame() { return this.dameGear + this.dameLv },
                get maxArmor() { return this.armorGear + this.armorLv },
                currentHealth: 50,

                // Skill 1: Trừ 10 máu của quái vật
                skill1(characterInGame) {
                    if (monsterInGame.mana >= 10) {
                        monsterInGame.mana -= 10; // Giảm mana
                        attackInGame(10, characterInGame)
                    }
                },
                skill2(characterInGame) {
                    if (monsterInGame.mana >= 10) {
                        monsterInGame.mana -= 20; // Giảm mana
                        attackInGame(20, characterInGame)
                    }
                },
                skill3(characterInGame) {
                    if (monsterInGame.mana >= 10) {
                        monsterInGame.mana -= 30; // Giảm mana
                        attackInGame(30, characterInGame)
                    }
                },
                size: { width: 50, height: 50 }, lv: 5,
                name: "quái Vật HĂM",
                position: { top: 200, left: 123 }, color: 'black'
            },
            {
                level: 1, experience: 0, id: 1,

                armor: 0, maxMana: 300, mana: 0, // in-game

                hpGear: 0, dameGear: 0, armorGear: 0, // trang bị

                get hpLv() { return 100 + (this.level - 1) * 20 },
                get dameLv() { return 20 + (this.level - 1) * 10 },
                get armorLv() { return 3 + (this.level - 1) * 2 },
                get maxHealth() { return this.hpGear + this.hpLv },
                get maxDame() { return this.dameGear + this.dameLv },
                get maxArmor() { return this.armorGear + this.armorLv },
                currentHealth: 50,

                // Skill 1: Trừ 10 máu của quái vật
                skill1(characterInGame) {
                    if (monsterInGame.mana >= 10) {
                        monsterInGame.mana -= 10; // Giảm mana
                        attackInGame(10, characterInGame)
                    }
                },
                skill2(characterInGame) {
                    if (monsterInGame.mana >= 10) {
                        monsterInGame.mana -= 20; // Giảm mana
                        attackInGame(20, characterInGame)
                    }
                },
                skill3(characterInGame) {
                    if (monsterInGame.mana >= 10) {
                        monsterInGame.mana -= 30; // Giảm mana
                        attackInGame(30, characterInGame)
                    }
                },
                size: { width: 50, height: 50 }, lv: 2,
                name: "quái Vật HAH",
                position: { top: 200, left: 270 }, color: 'black'
             }
         ],
        exits: [
            { 
                size: { width: 50, height: 50 }, 
                position: { top: 221, left: 100 },  mapI: 2, top: 50, left: 50 
            }
        ]
    },
    {
        id: 1,
        backgroundColor: 'pink',
        // backgroundColor: 'lightcoral',
        size: { width: 1000, height: 1000 },
        characters: [
            { 
                id: 'character1', position: { top: 50, left: 50 }, color: 'blue' 
            }
        ],
        objects: [
            { 
                size: { width: 40, height: 40 }, 
                position: { top: 200, left: 200 }, color: 'orange' 
            }
        ],
        enemies: [
             {
                level: 1, experience: 0, id:0, 

                armor: 0, maxMana: 300, mana: 0, // in-game

                hpGear: 0, dameGear: 0, armorGear: 0, // trang bị

                get hpLv() { return 100 + (this.level - 1) * 20 },
                get dameLv() { return 20 + (this.level - 1) * 10 },
                get armorLv() { return 3 + (this.level - 1) * 2 },
                get maxHealth() { return this.hpGear + this.hpLv },
                get maxDame() { return this.dameGear + this.dameLv },
                get maxArmor() { return this.armorGear + this.armorLv },
                currentHealth: 50,

                // Skill 1: Trừ 10 máu của quái vật
                skill1(characterInGame) {
                    if (monsterInGame.mana >= 10) {
                        monsterInGame.mana -= 10; // Giảm mana
                        attackInGame(10, characterInGame)
                    }
                },
                skill2(characterInGame) {
                    if (monsterInGame.mana >= 10) {
                        monsterInGame.mana -= 20; // Giảm mana
                        attackInGame(20, characterInGame)
                    }
                },
                skill3(characterInGame) {
                    if (monsterInGame.mana >= 10) {
                        monsterInGame.mana -= 30; // Giảm mana
                        attackInGame(30, characterInGame)
                    }
                },
                size: { width: 50, height: 50 }, lv: 5,
                name: "quái Vật HĂM",
                position: { top: 255, left: 123 }, color: 'black'
            },
            {
                level: 1, experience: 0, id: 1,

                armor: 0, maxMana: 300, mana: 0, // in-game

                hpGear: 0, dameGear: 0, armorGear: 0, // trang bị

                get hpLv() { return 100 + (this.level - 1) * 20 },
                get dameLv() { return 20 + (this.level - 1) * 10 },
                get armorLv() { return 3 + (this.level - 1) * 2 },
                get maxHealth() { return this.hpGear + this.hpLv },
                get maxDame() { return this.dameGear + this.dameLv },
                get maxArmor() { return this.armorGear + this.armorLv },
                currentHealth: 50,

                // Skill 1: Trừ 10 máu của quái vật
                skill1(characterInGame) {
                    if (monsterInGame.mana >= 10) {
                        monsterInGame.mana -= 10; // Giảm mana
                        attackInGame(10, characterInGame)
                    }
                },
                skill2(characterInGame) {
                    if (monsterInGame.mana >= 10) {
                        monsterInGame.mana -= 20; // Giảm mana
                        attackInGame(20, characterInGame)
                    }
                },
                skill3(characterInGame) {
                    if (monsterInGame.mana >= 10) {
                        monsterInGame.mana -= 30; // Giảm mana
                        attackInGame(30, characterInGame)
                    }
                },
                size: { width: 50, height: 50 }, lv: 2,
                name: "quái Vật HAH",
                position: { top: 200, left: 270 }, color: 'black'
             }
         ],
        exits: [
            { 
                size: { width: 50, height: 50 }, 
                position: { top: 300, left: 300 },  mapI: 3, top: 150, left: 20 
            }
        ]
    },
    {
        id: 2,
        backgroundColor: 'lightgreen',
        size: { width: 1500, height: 1500 },
        characters: [
            { 
                id: 'character1', position: { top: 50, left: 50 }, color: 'blue' 
            }
        ],
        objects: [
            { 
                size: { width: 40, height: 40 }, 
                position: { top: 200, left: 200 }, color: 'orange' 
            }
        ],
        enemies: [
        {
                level: 1, experience: 0, id: 1,

                armor: 0, maxMana: 300, mana: 0, // in-game

                hpGear: 0, dameGear: 0, armorGear: 0, // trang bị

                get hpLv() { return 100 + (this.level - 1) * 20 },
                get dameLv() { return 20 + (this.level - 1) * 10 },
                get armorLv() { return 3 + (this.level - 1) * 2 },
                get maxHealth() { return this.hpGear + this.hpLv },
                get maxDame() { return this.dameGear + this.dameLv },
                get maxArmor() { return this.armorGear + this.armorLv },
                currentHealth: 50,

                // Skill 1: Trừ 10 máu của quái vật
                skill1(characterInGame) {
                    if (monsterInGame.mana >= 10) {
                        monsterInGame.mana -= 10; // Giảm mana
                        attackInGame(10, characterInGame)
                    }
                },
                skill2(characterInGame) {
                    if (monsterInGame.mana >= 10) {
                        monsterInGame.mana -= 20; // Giảm mana
                        attackInGame(20, characterInGame)
                    }
                },
                skill3(characterInGame) {
                    if (monsterInGame.mana >= 10) {
                        monsterInGame.mana -= 30; // Giảm mana
                        attackInGame(30, characterInGame)
                    }
                },
                size: { width: 50, height: 50 }, lv: 2,
                name: "quái Vật HAH",
                position: { top: 200, left: 270 }, color: 'black'
             }
        ],
        exits: [
            { 
                size: { width: 50, height: 50 }, 
                position: { top: 300, left: 300 }, mapI: 1, top: 900, left: 10 
            }
        ]
    },
    {
        character: { 
            // id: 'character', 
            charI: 0,
            position: { top: 0, left: 0 }, 
            mapI: 0, name: 'Kun1891',
            vang: 0, kimcuong: 0,
            level: 1, experience: 0,

        }
    }
];

function updateCharacterInfo() {
    const expBar = document.querySelector('.exp-bar-character');
    const charName = document.getElementById('char-name');
    const charGold = document.getElementById('char-gold');
    const charDiamond = document.getElementById('char-diamond');
    const charLevel = document.getElementById('char-level');

    // Cập nhật width của thanh kinh nghiệm theo phần trăm kinh nghiệm
    var x = mapsData[mapsData.length-1].character
    expBar.style.width = `${x.experience}%`;

    // Cập nhật thông tin nhân vật
    charName.textContent = `Tên: ${x.name}`;
    charGold.textContent = `Vàng: ${x.vang}`;
    charDiamond.textContent = `Kim cương: ${x.kimcuong}`;
    charLevel.textContent = `Cấp độ: ${x.level}+${x.experience}%`;
}