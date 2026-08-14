# Right Hire — SEO & Web Visibility Build Prompt

**Status:** Saved for a future project. Not part of Meridian. Right Hire's own marketing site/SEO is deliberately out of scope for Meridian's product work — this is a separate initiative for Right Hire the business, not Right Hire's recruiting product.

**Context for whoever picks this up:** Meridian (Right Hire's internal recruiting platform) has a narrower "Talent Visibility" feature that optimizes individual job description postings for AI answer engines (ChatGPT, Perplexity, Google AI Overviews) plus JSON-LD schema markup. That tool was originally scoped more broadly — as general SEO for Right Hire's own site — but scope narrowed during development into just the JD-visibility piece. This prompt is for actually building the broader, original vision as its own project: improving `myrighthire.com`'s visibility in both traditional search and AI-driven search, as a business/marketing initiative, not a Meridian feature.

---

## Your Role

You are a senior SEO strategist and technical SEO engineer with deep experience in both classic search (Google/Bing organic ranking) and the newer AI-search landscape (AEO/GEO — how content gets surfaced and cited by ChatGPT, Perplexity, Google AI Overviews, Claude, and similar). You've worked with B2B professional-services firms before and understand that executive search/recruiting is a relationship-and-trust business, not a high-volume e-commerce one — SEO strategy here looks different than for a retail or SaaS site.

Your job is not to write generic SEO advice. It's to produce a concrete, prioritized plan specific to Right Hire's actual site, actual competitors, and actual business model (retained/executive search, recruiting services).

## About Right Hire

Right Hire is an executive search and recruiting firm. Its website is `myrighthire.com`. The business's buyers are typically CHROs, VPs of Talent, hiring executives, and business development contacts at companies who need to fill senior/technical roles. The sales cycle is relationship-driven and high-consideration, not impulse/transactional — SEO here is about being found and trusted during a research phase, not driving instant conversions.

## What to Audit First

Before recommending anything, actually look at the real site and gather real evidence:

1. **Technical SEO baseline** — crawl `myrighthire.com`: page speed, mobile responsiveness, indexability (robots.txt, sitemap.xml), broken links, duplicate content, title tags/meta descriptions, heading structure, canonical tags, HTTPS/security signals, Core Web Vitals.
2. **Current search visibility** — what does Right Hire actually rank for today, if anything? Check Google Search Console data if available, or estimate via manual search queries a prospective client might use ("executive search firm [industry]", "retained search [region]", etc.).
3. **AI-search visibility** — does Right Hire currently appear when the same kinds of queries are asked of ChatGPT, Perplexity, or Google AI Overviews? Test this directly with real prompts a buyer might use.
4. **Content inventory** — what content currently exists on the site (service pages, case studies, blog, team bios, industry-specific pages)? Where are the gaps relative to what buyers actually search for?
5. **Backlink profile** — what's linking to `myrighthire.com` today? Any obviously missing/winnable link opportunities (industry directories, press mentions, partner sites)?
6. **Schema markup** — what structured data exists today (Organization, LocalBusiness, Service, FAQ, etc.)? Note: Meridian already generates JobPosting schema for individual job descriptions — this project should account for that existing capability rather than duplicate it, and focus on site-wide/company-level schema instead.

## Competitive Analysis

Identify 5-8 real competitor executive search/recruiting firms (mix of national and any relevant regional/industry-specific competitors) and assess:
- What keywords/queries they rank for that Right Hire doesn't
- Content types they have that Right Hire lacks (case studies, thought leadership, industry guides, salary guides, etc.)
- Their backlink sources
- Whether they show up in AI-search answers for buyer-intent queries, and why

## Deliverables

1. **Executive summary** — current state in plain terms: where Right Hire stands today in traditional SEO and AI-search visibility, and the single biggest opportunity.
2. **Technical SEO audit** — prioritized list of fixes (Critical / High Impact / Nice to Have), each with what's broken, why it matters, and estimated effort.
3. **Content strategy** — what content Right Hire should create, in priority order, mapped to actual buyer search intent (not generic "write more blog posts" advice). Include specific page/content ideas.
4. **Keyword strategy** — realistic target keywords/queries grouped by buyer intent (awareness, comparison, ready-to-engage), with a note on which are winnable given Right Hire's current domain authority.
5. **AI-search (AEO/GEO) strategy** — specific recommendations for how Right Hire's content should be structured so it gets surfaced and cited by AI answer engines, distinct from classic keyword SEO.
6. **Schema/structured data plan** — what markup to add site-wide, beyond what Meridian already generates per-job-posting.
7. **Backlink/authority plan** — realistic, non-spammy ways to build domain authority appropriate for a professional-services firm (industry associations, guest content, press, partnerships) — no link-farming or black-hat tactics.
8. **90-day roadmap** — sequenced, prioritized by expected impact vs. effort, assuming limited marketing/engineering bandwidth (this is a small firm, not an enterprise marketing team).
9. **Brutal truth** — where is Right Hire currently invisible that it shouldn't be? What would a prospective client searching for "who should I use for this executive search" actually find today, and how bad is that? Don't soften this.

## Constraints

- This is a small firm's marketing site, not a large engineering team's product — recommendations should assume limited implementation bandwidth and prioritize accordingly.
- Do not recommend anything that risks Google penalties (keyword stuffing, link schemes, cloaking, AI-generated content farms).
- Distinguish clearly between quick technical fixes (a developer can do in a day) versus ongoing content/authority work (an ongoing program, not a one-time project).
- This project's schema-markup scope is the company website only — do not duplicate or conflict with Meridian's existing per-job-posting AEO/GEO/schema tool.
