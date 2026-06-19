// Map filenames to Google Drive file IDs.
// Use Drive's "Manage versions" to swap photos — the ID never changes.
// Pattern: https://drive.google.com/uc?export=view&id=FILE_ID

const PHOTO_IDS = {
  // Zone 01
  "01-full-garden-hero.JPG": "1Lk851dprU3t6uX6_oBp-XOL2an2Dsmeb",

  // Zone 02
  "02-front-yard-trees-overview.JPG":    "1gwnetrR9BjsLLCvbB9HIALGv6SacVklU",
  "02-front-yard-trees-nectarine.JPG":   "12OBVpF2lgHqg7Wfd0GM3G_wT3uC4O-4J",
  "02-front-yard-trees-valencia-orange.JPG": "1PU0Nl03WHQBW5oAiTj1d_QPLCCTHuH6C",

  // Zone 03
  "03-street-garden-overview.JPG":     "1f0-yA6uVLkGMLmFtciUykeZwLFaaPwbe",
  "03-street-garden-palo-verde.JPG":   "18_9xT6gGzaY0Iun1DoUzLDErA0woK5ZB",
  "03-street-garden-rosemary-01.JPG":  "1WIhVN0hoIwCcAw8NFjBIILyQC_HzNGVy",
  "03-street-garden-rosemary-02.JPG":  "1pZbcQQTzK1CcxC5YBIweN8KVW__DOAMU",
  "03-street-garden-lavender-01.JPG":  "1QRWgQlb47-sHmVJACw4CN49mHXyWTc0O",
  "03-street-garden-lavender-02.JPG":  "1LjbGzWW05Bdj4XzxFcTdNmiL0TJb0Ty4",
  "03-street-garden-texas-sage-01.JPG":"1gcyoDoEugho_OrSyFjLltIxLqE8CB1kX",
  "03-street-garden-texas-sage-02.JPG":"1RVJMLLIE6cfWwB_CSdtlz3IHDCob4kuA",

  // Zone 04
  "04-blueberry-corner-overview.JPG":      "1vgmqpNoxkXstrv9T27oWRtKhb8ceOIjA",
  "04-blueberry-corner-blueberry-01.JPG":  "1u4Uqo7XNesLOxO-ygBnEtHsC17wCxKpJ",
  "04-blueberry-corner-blueberry-02.JPG":  "1hEeUDR8ilzaDG3wmJM9Y-DIZsYc3vV1e",

  // Zone 05
  "05-thailand-bed-overview.JPG":         "18ek4XqOmyd2VKsu_TYwYCRrRC8BsAHoK",
  "05-thailand-bed-thai-basil.JPG":        "15ncHzshfa-buiGthO29toNJ3Y9dK1RfT",
  "05-thailand-bed-thai-chili-pepper.JPG": "1z3P5lsBMCvnRh283mgbiGFhkPvHIZRfp",
  "05-thailand-bed-green-onions.JPG":      "173lIT9Ayve8ISiiHpc23LsvOzcGR3Qrf",
  "05-thailand-bed-marigold.JPG":          "1QelacjAvkgM5hys4oyHTmaX5EV5_R5ql",
  "05-thailand-bed-carrot-seedlings.JPG":  "1V54GEbEGf1U148wkk-sMoJ9oO60Eei0w",

  // Zone 06
  "06-bed-1-companions-overview.JPG":              "19CSq9WoIy2k6WOts7dAewtdO1XcAacmg",
  "06-bed-1-companions-husky-red-cherry-tomato.JPG":"1YzNJhNZDGqB0lbd_t7yEXoVWisEsO0IA",
  "06-bed-1-companions-baby-cherry-tomato.JPG":    "1go9zr2agKcpTFoc4CyeTR1KMcAH3fOik",
  "06-bed-1-companions-collard-greens.JPG":        "1bBcGD7xM7nYv8kLf1Hff3TX4Dnh1nXm-",
  "06-bed-1-companions-poblano.JPG":               "1GK5AISA4M_iDnX7WLGtBW1AiWH5r8Kom",

  // Zone 07
  "07-basil-bed-overview.JPG":           "1FWoYyP4CqNmZLAt5HHcxm2uQ7egOhNRt",
  "07-basil-bed-thai-basil.JPG":         "1xYFSPkwhm2PJwBmxovHSvPG5s_bq8cCM",
  "07-basil-bed-generic-basil-01.JPG":   "1xZsERqbDn5lqmMRLbdBvmr0j1vw4SNzs",
  "07-basil-bed-generic-basil-02.JPG":   "1FZjAnNEgkz-biSMXoFjVdOi-XEYTJAQD",
  "07-basil-bed-pesto-perpetua-basil.JPG":"1IOfiuHoXGwcv3sfLgDoNWGQFvK1kxjf9",
  "07-basil-bed-sweet-red-pepper.JPG":   "1wSdiAlcsgEqxklrHaLplqh6d8GWO_2zQ",
  "07-basil-bed-sweet-red-pepper-02.JPG":"179HvxSd6W3RRu_yVkRrwJequiFpl7y-K",
  "07-basil-bed-marigold-01.JPG":        "1ebxAKiesswXrXAWdqsoGI5Bz_XyXs77N",
  "07-basil-bed-marigold-02.JPG":        "1kJrkh1ZBmmYXylCK1HiM2QoIRR7Ss23q",

  // Zone 08
  "08-terracotta-row-full-overview-zoomed-out.JPG": "1zkHj62bo1-pWsSqFarr20NLRsSU_2YfJ",
  "08-terracotta-row-overview.JPG":           "145rKQ_Ms6wJjCrirA3UCadT2gqyG3JOV",
  "08-terracotta-row-marigold-deadheads.JPG": "19-8HhSyj5q7wyhWW2yIZvFjCfwZ0H9-y",
  "08-terracotta-row-seedlings-01.JPG":       "1vCwJAejzZNp_-faJHifwMRDym-gv-fjO",
  "08-terracotta-row-seedlings-02.JPG":       "1xACCDzaNjYMVV9PM0STbRv5lbOz1LOPV",
  "08-terracotta-row-california-sagebrush.JPG":"1aswNcr2z5GBWpvEvFQQWfVpeITEvOnze",
  "08-terracotta-row-sweet-banana-pepper.JPG": "1_GE0cFO9vOnWCVOFLw386L0RHDdttwbr",
  "08-terracotta-row-anaheim-chili.JPG":       "1S7tu-4-ReaCSn59z7tWXt7QVGaJLhSFR",
  "08-terracotta-row-zonal-geranium.JPG":      "1FGeAwiWpEGKXqRVOvMODrC2D3nq3SYmS",
  "08-terracotta-row-hot-burrito-pepper.JPG":  "1EWe4zANMfPZcuqC5gx_DTLqYcwiWg6Lw",
  "08-terracotta-row-rosemary.JPG":            "1fkhkxh0m1XVFT17Ch1we5vk6nObgvGnq",
  "08-terracotta-row-thyme.JPG":               "1G6umR5ZYb5INyR_DyznDlBW5bBZ2qmnx",
  "08-terracotta-row-mint.JPG":                "1vaL0SU6UNUPmEG_qsqK28R5ZIixWDjXb",

  // Zone 09
  "09-friends-of-terracotta-row-overview.JPG":            "1WkSQgEJe-5mlLl00o5Xc-UCqEVu5pN0K",
  "09-friends-of-terracotta-row-jalapeno.JPG":            "1mT6fPTQyZl4B3A4CRT8CM39sJkedt-mh",
  "09-friends-of-terracotta-row-sweet-green-peppers.JPG": "1nz6GV65vY2h5wwa_5PF3K8YCeTSVX4U2",
  "09-friends-of-terracotta-row-toddler-cherry-tomato.JPG":"1nZikF114xwfPegFwWDnhJ4pLsVi0Z3u0",
  "09-friends-of-terracotta-row-persian-cucumber.JPG":    "1wdHcWH_tJovkvNp5yYP89Uyj6uj26YqF",
  "09-friends-of-terracotta-row-seedlings.JPG":           "1KB6iCm9VP4LJNMTgiO9S9LpmtiLLJjVa",

  // Zone 10
  "10-nicas-succulent-garden-overview.JPG": "1aL_z3w3cdUHIv7D_fi0yPOJVHdTnCoAZ",
};

const PLACEHOLDER_COLOR = "#c8d5b9";

function getPhotoUrl(filename) {
  // Case-insensitive lookup to handle .jpg vs .JPG variations
  const id = PHOTO_IDS[filename] || PHOTO_IDS[filename.toUpperCase()] || PHOTO_IDS[filename.toLowerCase()];
  if (id) {
    return `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;
  }
  return makePlaceholder(filename);
}

function makePlaceholder(filename) {
  const label = filename.replace(/\.jpe?g$/i, '').replace(/-/g, ' ');
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>
    <rect width='800' height='600' fill='${PLACEHOLDER_COLOR}'/>
    <text x='400' y='280' font-family='Georgia,serif' font-size='18' fill='#4a5e3a' text-anchor='middle' dominant-baseline='middle'>${label}</text>
    <text x='400' y='320' font-family='Georgia,serif' font-size='14' fill='#6b7c5a' text-anchor='middle'>photo coming soon</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
