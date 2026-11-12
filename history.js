// Daily Video History Log & Topic Registry
const PODCAST_HISTORY = [
  {
    "episode": 1,
    "topic": "What If We Could Talk to Our Pets? 🐶🗣️",
    "date": "2026-10-15T15:36:34.182530",
    "duration_sec": 1579.15,
    "duration_min": 26.32,
    "video_file": "podcast_ep1_20261015_151254.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 2,
    "topic": "If Animals Wore Clothes: A Fashionable Fun Adventure! 🐘👕",
    "date": "2026-10-16T15:20:06.842218",
    "duration_sec": 1541.93,
    "duration_min": 25.7,
    "video_file": "podcast_ep2_20261016_145826.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 3,
    "topic": "If Toys Could Talk: A Secret Adventure in My Bedroom! 🦶👶",
    "date": "2026-10-17T14:13:57.340710",
    "duration_sec": 1542.26,
    "duration_min": 25.7,
    "video_file": "podcast_ep3_20261017_135113.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 4,
    "topic": "If Clouds Were Candy: A Sweet Sky Adventure! 🍰🍬",
    "date": "2026-10-18T14:26:48.438035",
    "duration_sec": 1468.17,
    "duration_min": 24.47,
    "video_file": "podcast_ep4_20261018_140628.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 5,
    "topic": "What If We Could Fly? Soaring Through Our Dreams!",
    "date": "2026-10-19T17:24:59.337784",
    "duration_sec": 1403.76,
    "duration_min": 23.4,
    "video_file": "podcast_ep5_20261019_170504.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 6,
    "topic": "What If We Had Superpowers for a Day? Awesome Abilities for Kids!",
    "date": "2026-10-20T15:38:08.156134",
    "duration_sec": 1489.49,
    "duration_min": 24.82,
    "video_file": "podcast_ep6_20261020_151722.mp4",
    "platform": "None"
  },
  {
    "episode": 7,
    "topic": "If Our Food Could Talk: A Silly Kitchen Adventure! 🍎🗣️",
    "date": "2026-10-21T01:52:51.822078",
    "duration_sec": 1434.24,
    "duration_min": 23.9,
    "video_file": "podcast_ep7_20261021_013937.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 8,
    "topic": "If Plants Could Giggle: A Whispering Garden Adventure! 🌱👲️",
    "date": "2026-10-21T15:50:39.490380",
    "duration_sec": 1424.9,
    "duration_min": 23.75,
    "video_file": "podcast_ep8_20261021_152930.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 9,
    "topic": "If Our Shadows Could Play Hide-and-Seek!",
    "date": "2026-10-22T15:53:59.964907",
    "duration_sec": 1553.38,
    "duration_min": 25.89,
    "video_file": "podcast_ep9_20261022_152830.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 10,
    "topic": "If Our Houses Could Talk: What Would They Say?",
    "date": "2026-10-23T15:44:27.964659",
    "duration_sec": 1552.06,
    "duration_min": 25.87,
    "video_file": "podcast_ep10_20261023_152129.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 11,
    "topic": "If Our Dreams Had a Secret Map: Exploring Fantastical Worlds!",
    "date": "2026-10-24T14:32:35.910508",
    "duration_sec": 1521.34,
    "duration_min": 25.36,
    "video_file": "podcast_ep11_20261024_140450.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 12,
    "topic": "If Our Crayons Could Draw Themselves! A Colorful Imagination Adventure!",
    "date": "2026-10-25T14:56:19.425841",
    "duration_sec": 1451.35,
    "duration_min": 24.19,
    "video_file": "podcast_ep12_20261025_142923.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 13,
    "topic": "If Our School Bus Could Explore Outer Space! 🚀✨",
    "date": "2026-10-26T17:21:20.211154",
    "duration_sec": 1519.41,
    "duration_min": 25.32,
    "video_file": "podcast_ep13_20261026_165221.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 14,
    "topic": "What If Your Backpack Could Pack Itself? 🡲🤟",
    "date": "2026-10-27T16:23:22.015026",
    "duration_sec": 1350.6,
    "duration_min": 22.51,
    "video_file": "podcast_ep14_20261027_155734.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 15,
    "topic": "If Our Socks Could Secretly Swap Places! A Laundry Day Mystery!",
    "date": "2026-10-28T17:05:53.142105",
    "duration_sec": 1382.57,
    "duration_min": 23.04,
    "video_file": "podcast_ep15_20261028_164544.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 16,
    "topic": "If Our Toys Could Explore the Deep Blue Sea! 🐟🥲",
    "date": "2026-10-29T17:23:15.435794",
    "duration_sec": 1442.23,
    "duration_min": 24.04,
    "video_file": "podcast_ep16_20261029_170204.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 17,
    "topic": "If Our Toes Could Talk: A Wiggle-Wormy Adventure!",
    "date": "2026-10-30T17:08:19.895495",
    "duration_sec": 1512.26,
    "duration_min": 25.2,
    "video_file": "podcast_ep17_20261030_164637.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 18,
    "topic": "If Our Puddles Were Portals: Splashing into New Worlds!",
    "date": "2026-10-31T16:08:49.894789",
    "duration_sec": 1355.9,
    "duration_min": 22.6,
    "video_file": "podcast_ep18_20261031_154939.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 19,
    "topic": "If Our Pencils Could Write Stories by Themselves! ✏️✨",
    "date": "2026-11-01T17:07:53.053994",
    "duration_sec": 1412.71,
    "duration_min": 23.55,
    "video_file": "podcast_ep19_20261101_165338.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 20,
    "topic": "If Your Teddy Bear Could Tell Jokes! A Giggle-rific Adventure!",
    "date": "2026-11-02T20:49:41.251889",
    "duration_sec": 1570.87,
    "duration_min": 26.18,
    "video_file": "podcast_ep20_20261102_202821.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 21,
    "topic": "If Our Dreams Were Flying Carpets! Zooming to Amazing Places!",
    "date": "2026-11-03T18:18:03.171684",
    "duration_sec": 1386.14,
    "duration_min": 23.1,
    "video_file": "podcast_ep21_20261103_175848.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 22,
    "topic": "If Our Bedtime Stories Could Come to Life!",
    "date": "2026-11-04T18:33:46.340691",
    "duration_sec": 1573.32,
    "duration_min": 26.22,
    "video_file": "podcast_ep22_20261104_181019.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 23,
    "topic": "If Our Fingers Could Paint the Sky: A Colorful Cosmic Adventure!",
    "date": "2026-11-05T18:32:51.805662",
    "duration_sec": 1518.29,
    "duration_min": 25.3,
    "video_file": "podcast_ep23_20261105_181055.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 24,
    "topic": "If Our Bikes Could Be Spaceships: Galactic Adventures Await!",
    "date": "2026-11-06T18:00:52.059046",
    "duration_sec": 1557.55,
    "duration_min": 25.96,
    "video_file": "podcast_ep24_20261106_173810.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 25,
    "topic": "If Our Houses Could Sing! A Melodious Neighborhood Adventure! 🏠🎶",
    "date": "2026-11-07T16:49:22.436988",
    "duration_sec": 1524.17,
    "duration_min": 25.4,
    "video_file": "podcast_ep25_20261107_163436.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 26,
    "topic": "If Our Backpacks Could Pack Snacks! A Delicious Discovery!",
    "date": "2026-11-08T17:07:54.663059",
    "duration_sec": 1560.93,
    "duration_min": 26.02,
    "video_file": "podcast_ep26_20261108_164535.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 27,
    "topic": "If Our Shadows Could Whisper Secrets! A Spooky Fun Adventure!",
    "date": "2026-11-09T21:17:04.333443",
    "duration_sec": 1467.98,
    "duration_min": 24.47,
    "video_file": "podcast_ep27_20261109_205609.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 28,
    "topic": "If Our School Supplies Could Explore the Jungle!",
    "date": "2026-11-10T18:27:21.478327",
    "duration_sec": 1506.5,
    "duration_min": 25.11,
    "video_file": "podcast_ep28_20261110_180511.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 29,
    "topic": "If Our Puddles Were Portals to Animal Kingdoms! Splash into New Adventures!",
    "date": "2026-11-11T18:17:37.453304",
    "duration_sec": 1520.45,
    "duration_min": 25.34,
    "video_file": "podcast_ep29_20261111_175857.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 30,
    "topic": "If Our Puddles Were Time Machines: A Splashy Trip to the Dinosaurs!",
    "date": "2026-11-12T18:51:27.608370",
    "duration_sec": 1446.26,
    "duration_min": 24.1,
    "video_file": "podcast_ep30_20261112_183018.mp4",
    "platform": "Facebook"
  }
];
if (typeof module !== 'undefined' && module.exports) { module.exports = PODCAST_HISTORY; }
if (typeof window !== 'undefined') { window.PODCAST_HISTORY = PODCAST_HISTORY; }
