function lottery(lotteryName: string, cash: number = 3) {
  let i: number = 0;
  for (i = 0; i < cash; i++) {
    console.log(lotteryName);
  }
}

lottery("Jackpot Mania", 10);
