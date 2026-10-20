// ─────────────────────────────────────────────────────────────
//  BRAND CONFIG — the only file that changes to onboard a brewery.
//
//  If you find yourself editing assets/app.js or assets/styles.css to
//  onboard a client, the abstraction leaked. Fix it here instead, then
//  push the fix back to portal-template so every future brand gets it.
//
//  Every value below marked  ‹REPLACE›  must be changed. Search the file
//  for that marker before you deploy — nothing else should need touching.
// ─────────────────────────────────────────────────────────────

export const BRAND = {
  // ── Identity ──────────────────────────────────────────────
  //  `slug` is load-bearing. It is the single string that has to match
  //  across five systems. Set it once, here, and derive everything else
  //  from it. See NAMING in the README.
  //
  //    slug                 rincon
  //    repo                 jgrasty123/portal-rincon
  //    Shopify product tag  portal:rincon
  //    smart collection     portal-rincon        ← collectionHandle below
  //    cart attribute       portal = rincon
  //    Netlify site         portal-rincon
  //
  slug: "matka",

  name: "Matka Wodka",
  logo: "/assets/logo.svg",              // diamond mark, from matkawodka.com header
  favicon: "/assets/favicon.png",

  // Set true when the logo file already contains the brand name as a
  // wordmark — the text beside it is then hidden visually but kept for
  // screen readers, so the name isn't printed twice.
  logoIncludesName: false,

  // Optional hero wordmark: replaces the brand name in the H1 with an
  // image. Leave null unless the client supplies a clean bare logotype.
  heroMark: "/assets/wordmark.svg",       // MATKA logotype, from matkawodka.com

  // Optional hero badge (e.g. an award, a claim stamp). Client artwork
  // only — do not invent one. Leave null to hide.
  heroBadge: null,
  // heroBadge: { image: "/assets/badge.png", label: "Est. 1998" },

  // ── Look ──────────────────────────────────────────────────
  //  EXTRACT these from the client's live site. Do not invent a palette.
  //  Save their homepage as HTML and pull the most frequent hex values
  //  from the CSS; the theme-color meta tag is usually their primary.
  //
  //  ⚠ Check whether their site is LIGHT or DARK before designing anything.
  //    The values below are a neutral light default so an un-themed deploy
  //    looks obviously unfinished rather than accidentally plausible.
  colors: {
    //  Extracted from matkawodka.com (light site, cream ground).
    bg:         "#FFF3E3",   // page ground
    surface:    "#FFE6C3",   // product panel colour on their site
    surfaceAlt: "#D1D2CC",   // their grey section band
    text:       "#000000",
    muted:      "#5E6061",   // their #808283, darkened: 3.5:1 on the cream fails AA
    line:       "#B8B7AD",
    accent:     "#FF301A",   // logo / wordmark red-orange
    accentText: "#000000",   // black on #FF301A is 5.7:1; white is only 3.7:1
    gold:       "#860A0A",   // "Spirit with Purpose" deep red
  },

  //  Pull the real faces from their Google Fonts <link> and font-family
  //  declarations. If their type is licensed and self-hosted, we do not
  //  have the license — pick the closest free stand-in and say so here.
  fonts: {
    //  Same Google faces as matkawodka.com (Roboto Mono is their button /
    //  nav face; loaded for parity).
    display: "'Manrope', 'Helvetica Neue', sans-serif",
    body:    "'Roboto Flex', system-ui, sans-serif",
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700" +
      "&family=Roboto+Flex:wght@400;500;600&family=Roboto+Mono:wght@400;500" +
      "&display=swap",
  },

  // ── Shipping coverage page ────────────────────────────────
  //  Drives /shipping.html. Which coverage map applies to this
  //  brand's products:
  //    "beer"     beer, wine, malt- and wine-based RTDs  (46 + DC)
  //    "spirits"  spirits and spirits-based RTDs         (40 + DC)
  //  Spirits-based canned cocktails are "spirits", not "beer".
  //  Both listed renders a toggle. The state data itself lives in
  //  assets/shipping-coverage.js and is identical in every repo.
  shipping: { categories: ["spirits"] },

  // ── Copy ──────────────────────────────────────────────────
  tagline: "Hand-crafted traditional Polish vodka with a purpose. 100% of " +
           "profits are donated to organizations supporting refugees and immigrants.",
  heroKicker: "Organic Spelt \u00b7 Hand-crafted \u00b7 Gluten Free \u00b7 Non GMO",

  // The logo links here. On our subdomain this is the only thread back
  // to the brand — it must point at their real site, never at us.
  backToSiteUrl: "https://matkawodka.com",
  backToSiteLabel: "Back to Main Site",

  // Header nav. Mirror the client's own nav where it has an equivalent;
  // link out to their site where it doesn't. `external: true` opens a
  // new tab and adds rel="noopener".
  nav: [
    { label: "Shop",     href: "#grid" },
    { label: "About",    href: "https://matkawodka.com/about/",   external: true },
    { label: "Journal",  href: "https://matkawodka.com/journal/", external: true },
    { label: "Find Us",  href: "https://matkawodka.com/find-us/", external: true },
    { label: "Where We Ship", href: "#shipping" },
  ],

  // Announcement bar. DISPLAY ONLY — never the enforcement layer.
  // Do not name states here. Destination eligibility is decided at
  // Shopify checkout and nowhere else.
  shippingLine:
    "Shipping to select states. Enter your address at checkout to confirm.",

  // Section headings and empty states. Here so brewery vocabulary can be
  // swapped without touching app.js.
  labels: {
    filtersHeading:  "Spirit",
    emptyFilterTitle: "Nothing here yet",
    emptyFilterLine:  "Nothing matches that filter right now. Try another.",
    cartEmptyTitle:   "Your cart is empty.",
    cartEmptyLine:    "Add a bottle and it'll show up here.",
    addLabel:         "Add",
    soldOutLabel:     "Sold out",
  },

  // ── Adult signature ───────────────────────────────────────
  //  Disclosure only. The fee is applied at Shopify checkout as a
  //  shipping-rate component, NOT as a cart line here.
  //
  //  ⚠ ONCE PER ORDER, not per line item. If a customer sees $5.99 here
  //    and is charged $17.97 at checkout for three items, that is a
  //    checkout-side misconfiguration — fix it there, not by editing this
  //    copy. This has gone wrong before on bundled products.
  adultSignature: {
    active: true,
    fee: 5.99,
    line: "Adult signature required on delivery \u2014 $5.99 per order, " +
          "added at checkout. Someone 21+ must be there to sign.",
  },

  // ── Pre-sale ──────────────────────────────────────────────
  //  Set active:false the day stock ships and the entire treatment
  //  disappears — announcement bar, notice card, and cart drawer note.
  //  `window` empty renders `line` alone; fill it as soon as a real
  //  ship window is confirmed. Vague windows generate support email.
  presale: {
    active: false,
    label: "Pre-Sale Only",
    line: "Shipping soon",
    window: "",                            // e.g. "Ships the week of Oct 6"
    note: "You're pre-ordering. Your card is charged today and your order " +
          "ships as soon as stock lands.",
  },

  // ── Minimum order quantity ────────────────────────────────
  //  THE PORTAL DOES NOT ENFORCE THIS. It sets expectations and disables
  //  its own checkout button. The cart is localStorage and the Shopify
  //  checkout URL is a plain shareable link, so anything decided here can
  //  be walked around. Real enforcement is the Yuko validation function
  //  (Shopify Functions), which runs server-side and covers Shop Pay and
  //  the other express buttons too.
  //
  //  ⚠ `scope` MUST match how the Yuko rule is configured:
  //      "cart" → Yuko scope Cart — minimum N total items, any mix
  //      "line" → Yuko scope Product/Variant — minimum N of each item
  //
  //  ⚠ The Yuko rule MUST be scoped to THIS brand's collection
  //    (portal-<slug>). bro-basket.myshopify.com serves BroBasket and
  //    Go-To Gifting from the same store; an unscoped rule puts a
  //    minimum on every gift basket order on the account.
  minOrder: {
    active: false,
    qty: 2,
    scope: "cart",
    heading: "2-item minimum",
    line: "Orders start at two items. Mix and match anything you like.",
  },

  // ── Promo ticker ──────────────────────────────────────────
  //  Scrolling band under the hero, drawn in CSS from the palette (no
  //  dependency on the client's CDN). Copy only — nothing is added to the
  //  cart and nothing reaches the Bev Connect pick list. Anything promised
  //  here has to be fulfilled by hand, so switch it off the moment the
  //  offer ends.
  //
  //  `tickerText` repeats, so keep it short. `line` is the full sentence:
  //  read once by screen readers, and shown as static text instead of the
  //  scroll for visitors who prefer reduced motion.
  promo: {
    active: false,
    tickerText: "",
    line: "",
  },

  // ── Help widget ───────────────────────────────────────────
  //  Floating "?" button, bottom right. Posts to Netlify Forms — no
  //  backend, no third-party script, no cookies.
  //
  //  ⚠ TWO THINGS OR IT SILENTLY FAILS:
  //    1. Form detection must be enabled in the Netlify dashboard.
  //       A 404 on POST with correct markup means detection was never
  //       turned on — it is not a code bug. Netlify's post-processor
  //       strips data-netlify and the honeypot attrs from the deployed
  //       HTML when detection worked; that's the reliable signal.
  //    2. Set the notification email under Site configuration → Forms →
  //       Form notifications, or nobody ever sees a submission.
  //
  //  formName must also be updated in index.html — twice (the form's
  //  name attribute and the hidden form-name input).
  helpForm: {
    active: true,
    formName: "matka-help",
    heading: "Need a hand?",
    line: "Questions about an order or shipping? Send a note and we'll " +
          "get back to you.",
    success: "Thanks \u2014 we've got it. We'll reply by email shortly.",
  },

  // Shown if the catalog fails to load. Go-To Gifting is the seller of
  // record, so this is our contact unless the client wants theirs.
  supportEmail: "james@gotogifting.com",
  supportPhone: "",

  // ── Filters ───────────────────────────────────────────────
  //  Build these from the tags actually on the products, not from a spec.
  //  A filter with zero matching products hides itself, so a partial tag
  //  pass degrades quietly instead of showing empty categories — check
  //  the live grid, don't assume.
  filters: [
    // Single SKU today, so just the "All" chip. Add tag chips here when
    // Matka adds products (e.g. { label: "Merch", tag: "merch" }).
    { label: "All Vodka",  tag: null },
  ],

  // ── Shopify ───────────────────────────────────────────────
  //  Catalog is filtered by COLLECTION HANDLE, not by vendor.
  //  Do not "simplify" this back to a vendor query: installed apps
  //  (Route, Rise.ai, Fast Bundle, BYOB) write to the vendor field, so
  //  that namespace is polluted and returns wrong or partial catalogs.
  //
  //  Set up: tag the products portal:<slug> → build a smart collection on
  //  that tag → put its handle here. If the handle is wrong the portal
  //  fails loud with a named error rather than rendering an empty grid.
  //
  //  ⚠ portal-<slug> collections are ALWAYS smart, never manual. The rule is
  //    TAG EQUALS portal:<slug>, appliedDisjunctively: false. Tagging a
  //    product is therefore the ONE action that puts it in the grid.
  //    A manual collection looks identical in admin but silently drops any
  //    newly tagged product, so check before trusting it:
  //      collectionByHandle(handle:"portal-<slug>") { ruleSet }
  //    ruleSet: null means manual — convert it with collectionUpdate before
  //    adding products. All six portal collections were converted 2026-09-10.
  // Merchandising order, by product handle. Shopify smart collections cannot
  // be sorted manually, so the order lives here. Handles not listed keep their
  // Shopify order and follow the listed ones — a newly tagged product always
  // shows up, it just lands at the end until you add it here.
  // Leave as [] to use Shopify's own collection sort.
  productOrder: [],

  collectionHandle: "portal-matka",

  shopDomain: "sgproof.myshopify.com",    // Booze Finders

  //  Public Storefront token from the brand's own Headless storefront.
  //  Safe to ship client-side: read-only, scoped to public product data.
  //  Give every brand its own so it can be rotated independently.
  //  NEVER put an Admin API token here.
  storefrontToken: "7f822211fdf6cb5b5db0bded02ac712d",
  apiVersion: "2026-04",

  //  Written onto the Shopify cart as an attribute. This is what the
  //  Shopify Flow order-tagging workflow keys on for portal attribution,
  //  and what invoicing and P&L allocation read.
  //
  //  ⚠ Flow must be configured against the CART ATTRIBUTE, not product
  //    tags, and the value must match `slug` exactly. Getting this wrong
  //    means orders land untagged and the client's commission can't be
  //    calculated. Verify with a real test order before launch.
  sourceTag: "matka",

  // Seller of record. Legally operative — do not soften, do not blur to
  // make the handoff feel more seamless.
  sellerOfRecord: "Go-To Gifting",
  sellerNote:
    "Checkout is handled by Go-To Gifting, our licensed retail partner.",

  // ── DEMO MODE ─────────────────────────────────────────────
  //  While `demoProducts` is a non-empty array the portal renders from it
  //  and never calls Shopify. Checkout is disabled and says so plainly —
  //  it does not pretend to work. Use this for pitch previews before the
  //  client's products exist in the store.
  //
  //  Going live: import the products, publish them to this brand's
  //  Headless storefront, paste the token above, set demoProducts: [].
  demoProducts: [],
};
