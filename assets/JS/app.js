function getRandomValue(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
   Data() {
    return {
        playerHealth: 100,
        monsterHealth: 100
    };
   },
   methods: {
       attackMonster() {
           const attackValue = getRandomValue(5, 12);;
        //    this.monsterHealth = this.monsterHealth - attackValue;
           this.monsterHealth -= attackValue;
       },
       attackPlayer() {
        const attackValue = getRandomValue(8, 12);
        this.playerHealth -= attackValue;
       }
   }

});
app.mount('#game');

