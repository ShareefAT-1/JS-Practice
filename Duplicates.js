const arr = [1, 2, 3, 4, 5, 5, 3, 1];
const dupli = [];
for (let i = 0; i < arr.length; i++) {
  dupli[arr[i]] = 0;
}
for (let j = 0; j < arr.length; j++) {
  dupli[arr[j]]++;
}
for (let k = 0; k < arr.length; k++) {
  if (dupli[k] > 1) {
    console.log(k);
  }
}





// make me a manga where there is a zompi apocalypse and some humans got a level up system .our mc is a loser because of his circumstances and he also got the worst skill until he desides to take it seriously and become the first ss rank player .charecter skech of our mc:first he looks like a loser because of the fat in his face but under it he is a very good looking guy .he is a very hard working guy .after he train so hard that he loses all the fat fast
