const wordList = [
  {
    "Day": 1,
    "Date": "Jun 19 2021",
    "Word": "CIGAR"
  },
  {
    "Day": 2,
    "Date": "Jun 20 2021",
    "Word": "REBUT"
  },
  {
    "Day": 3,
    "Date": "Jun 21 2021",
    "Word": "SISSY"
  },
  {
    "Day": 4,
    "Date": "Jun 22 2021",
    "Word": "HUMPH"
  },
  {
    "Day": 5,
    "Date": "Jun 23 2021",
    "Word": "AWAKE"
  },
  {
    "Day": 6,
    "Date": "Jun 24 2021",
    "Word": "BLUSH"
  },
  {
    "Day": 7,
    "Date": "Jun 25 2021",
    "Word": "FOCAL"
  },
  {
    "Day": 8,
    "Date": "Jun 26 2021",
    "Word": "EVADE"
  },
  {
    "Day": 9,
    "Date": "Jun 27 2021",
    "Word": "NAVAL"
  },
  {
    "Day": 10,
    "Date": "Jun 28 2021",
    "Word": "SERVE"
  },
  {
    "Day": 11,
    "Date": "Jun 29 2021",
    "Word": "HEATH"
  },
  {
    "Day": 12,
    "Date": "Jun 30 2021",
    "Word": "DWARF"
  },
  {
    "Day": 13,
    "Date": "Jul 01 2021",
    "Word": "MODEL"
  },
  {
    "Day": 14,
    "Date": "Jul 02 2021",
    "Word": "KARMA"
  },
  {
    "Day": 15,
    "Date": "Jul 03 2021",
    "Word": "STINK"
  },
  {
    "Day": 16,
    "Date": "Jul 04 2021",
    "Word": "GRADE"
  },
  {
    "Day": 17,
    "Date": "Jul 05 2021",
    "Word": "QUIET"
  },
  {
    "Day": 18,
    "Date": "Jul 06 2021",
    "Word": "BENCH"
  },
  {
    "Day": 19,
    "Date": "Jul 07 2021",
    "Word": "ABATE"
  },
  {
    "Day": 20,
    "Date": "Jul 08 2021",
    "Word": "FEIGN"
  },
  {
    "Day": 21,
    "Date": "Jul 09 2021",
    "Word": "MAJOR"
  },
  {
    "Day": 22,
    "Date": "Jul 10 2021",
    "Word": "DEATH"
  },
  {
    "Day": 23,
    "Date": "Jul 11 2021",
    "Word": "FRESH"
  },
  {
    "Day": 24,
    "Date": "Jul 12 2021",
    "Word": "CRUST"
  },
  {
    "Day": 25,
    "Date": "Jul 13 2021",
    "Word": "STOOL"
  },
  {
    "Day": 26,
    "Date": "Jul 14 2021",
    "Word": "COLON"
  },
  {
    "Day": 27,
    "Date": "Jul 15 2021",
    "Word": "ABASE"
  },
  {
    "Day": 28,
    "Date": "Jul 16 2021",
    "Word": "MARRY"
  },
  {
    "Day": 29,
    "Date": "Jul 17 2021",
    "Word": "REACT"
  },
  {
    "Day": 30,
    "Date": "Jul 18 2021",
    "Word": "BATTY"
  },
  {
    "Day": 31,
    "Date": "Jul 19 2021",
    "Word": "PRIDE"
  },
  {
    "Day": 32,
    "Date": "Jul 20 2021",
    "Word": "FLOSS"
  },
  {
    "Day": 33,
    "Date": "Jul 21 2021",
    "Word": "HELIX"
  },
  {
    "Day": 34,
    "Date": "Jul 22 2021",
    "Word": "CROAK"
  },
  {
    "Day": 35,
    "Date": "Jul 23 2021",
    "Word": "STAFF"
  },
  {
    "Day": 36,
    "Date": "Jul 24 2021",
    "Word": "PAPER"
  },
  {
    "Day": 37,
    "Date": "Jul 25 2021",
    "Word": "UNFED"
  },
  {
    "Day": 38,
    "Date": "Jul 26 2021",
    "Word": "TRAWL"
  },
  {
    "Day": 39,
    "Date": "Jul 27 2021",
    "Word": "TRAWL"
  },
  {
    "Day": 40,
    "Date": "Jul 28 2021",
    "Word": "OUTDO"
  },
  {
    "Day": 41,
    "Date": "Jul 29 2021",
    "Word": "ADOBE"
  },
  {
    "Day": 42,
    "Date": "Jul 30 2021",
    "Word": "CRAZY"
  },
  {
    "Day": 43,
    "Date": "Jul 31 2021",
    "Word": "SOWER"
  },
  {
    "Day": 44,
    "Date": "Aug 01 2021",
    "Word": "REPAY"
  },
  {
    "Day": 45,
    "Date": "Aug 02 2021",
    "Word": "DIGIT"
  },
  {
    "Day": 46,
    "Date": "Aug 03 2021",
    "Word": "CRATE"
  },
  {
    "Day": 47,
    "Date": "Aug 04 2021",
    "Word": "CLUCK"
  },
  {
    "Day": 48,
    "Date": "Aug 05 2021",
    "Word": "SPIKE"
  },
  {
    "Day": 49,
    "Date": "Aug 06 2021",
    "Word": "MIMIC"
  },
  {
    "Day": 50,
    "Date": "Aug 07 2021",
    "Word": "POUND"
  },
  {
    "Day": 51,
    "Date": "Aug 08 2021",
    "Word": "MAXIM"
  },
  {
    "Day": 52,
    "Date": "Aug 09 2021",
    "Word": "LINEN"
  },
  {
    "Day": 53,
    "Date": "Aug 10 2021",
    "Word": "UNMET"
  },
  {
    "Day": 54,
    "Date": "Aug 11 2021",
    "Word": "FLESH"
  },
  {
    "Day": 55,
    "Date": "Aug 12 2021",
    "Word": "BOOBY"
  },
  {
    "Day": 56,
    "Date": "Aug 13 2021",
    "Word": "FORTH"
  },
  {
    "Day": 57,
    "Date": "Aug 14 2021",
    "Word": "FIRST"
  },
  {
    "Day": 58,
    "Date": "Aug 15 2021",
    "Word": "STAND"
  },
  {
    "Day": 59,
    "Date": "Aug 16 2021",
    "Word": "BELLY"
  },
  {
    "Day": 60,
    "Date": "Aug 17 2021",
    "Word": "IVORY"
  },
  {
    "Day": 61,
    "Date": "Aug 18 2021",
    "Word": "SEEDY"
  },
  {
    "Day": 62,
    "Date": "Aug 19 2021",
    "Word": "PRINT"
  },
  {
    "Day": 63,
    "Date": "Aug 20 2021",
    "Word": "YEARN"
  },
  {
    "Day": 64,
    "Date": "Aug 21 2021",
    "Word": "DRAIN"
  },
  {
    "Day": 65,
    "Date": "Aug 22 2021",
    "Word": "BRIBE"
  },
  {
    "Day": 66,
    "Date": "Aug 23 2021",
    "Word": "STOUT"
  },
  {
    "Day": 67,
    "Date": "Aug 24 2021",
    "Word": "PANEL"
  },
  {
    "Day": 68,
    "Date": "Aug 25 2021",
    "Word": "CRASS"
  },
  {
    "Day": 69,
    "Date": "Aug 26 2021",
    "Word": "FLUME"
  },
  {
    "Day": 70,
    "Date": "Aug 27 2021",
    "Word": "OFFAL"
  },
  {
    "Day": 71,
    "Date": "Aug 28 2021",
    "Word": "AGREE"
  },
  {
    "Day": 72,
    "Date": "Aug 29 2021",
    "Word": "ERROR"
  },
  {
    "Day": 73,
    "Date": "Aug 30 2021",
    "Word": "SWIRL"
  },
  {
    "Day": 74,
    "Date": "Aug 31 2021",
    "Word": "ARGUE"
  },
  {
    "Day": 75,
    "Date": "Sep 01 2021",
    "Word": "BLEED"
  },
  {
    "Day": 76,
    "Date": "Sep 02 2021",
    "Word": "DELTA"
  },
  {
    "Day": 77,
    "Date": "Sep 03 2021",
    "Word": "FLICK"
  },
  {
    "Day": 78,
    "Date": "Sep 04 2021",
    "Word": "TOTEM"
  },
  {
    "Day": 79,
    "Date": "Sep 05 2021",
    "Word": "WOOER"
  },
  {
    "Day": 80,
    "Date": "Sep 06 2021",
    "Word": "FRONT"
  },
  {
    "Day": 81,
    "Date": "Sep 07 2021",
    "Word": "SHRUB"
  },
  {
    "Day": 82,
    "Date": "Sep 08 2021",
    "Word": "PARRY"
  },
  {
    "Day": 83,
    "Date": "Sep 09 2021",
    "Word": "BIOME"
  },
  {
    "Day": 84,
    "Date": "Sep 10 2021",
    "Word": "LAPEL"
  },
  {
    "Day": 85,
    "Date": "Sep 11 2021",
    "Word": "START"
  },
  {
    "Day": 86,
    "Date": "Sep 12 2021",
    "Word": "GREET"
  },
  {
    "Day": 87,
    "Date": "Sep 13 2021",
    "Word": "GONER"
  },
  {
    "Day": 88,
    "Date": "Sep 14 2021",
    "Word": "GOLEM"
  },
  {
    "Day": 89,
    "Date": "Sep 15 2021",
    "Word": "LUSTY"
  },
  {
    "Day": 90,
    "Date": "Sep 16 2021",
    "Word": "LOOPY"
  },
  {
    "Day": 91,
    "Date": "Sep 17 2021",
    "Word": "ROUND"
  },
  {
    "Day": 92,
    "Date": "Sep 18 2021",
    "Word": "AUDIT"
  },
  {
    "Day": 93,
    "Date": "Sep 19 2021",
    "Word": "LYING"
  },
  {
    "Day": 94,
    "Date": "Sep 20 2021",
    "Word": "GAMMA"
  },
  {
    "Day": 95,
    "Date": "Sep 21 2021",
    "Word": "LABOR"
  },
  {
    "Day": 96,
    "Date": "Sep 22 2021",
    "Word": "ISLET"
  },
  {
    "Day": 97,
    "Date": "Sep 23 2021",
    "Word": "CIVIC"
  },
  {
    "Day": 98,
    "Date": "Sep 24 2021",
    "Word": "FORGE"
  },
  {
    "Day": 99,
    "Date": "Sep 25 2021",
    "Word": "CORNY"
  },
  {
    "Day": 100,
    "Date": "Sep 26 2021",
    "Word": "MOULT"
  }
]

export default wordList;