# J&N StructureWorks SEO Implementation Notes

## Business claims requiring owner verification

The following claims existed before this SEO implementation. They were not used to create new schema claims and should be verified by the owner before future content expansion.

| Claim | Current locations |
| --- | --- |
| "100+ projects completed" / "over 100 projects" | `src/pages/About.jsx`; `src/pages/CommercialBuildouts.jsx`; `src/pages/CommercialRenovations.jsx`; `src/pages/CustomHomes.jsx`; `src/pages/KitchenBathRemodeling.jsx`; `src/pages/RoomAdditions.jsx`; `src/pages/WholeHomeRenovations.jsx`; all pre-existing `ServiceArea*.jsx` pages; `src/components/landing/HeroSection.jsx`; `src/components/landing/WhyChooseUsSection.jsx` |
| "100+ happy clients" | `src/components/landing/AboutSection.jsx` |
| "Since 2020" / founding year 2020 | `src/pages/About.jsx`; service and location pages listed above; `src/components/landing/WhyChooseUsSection.jsx` |
| "5+ years experience" | `src/components/landing/HeroSection.jsx`; `src/pages/FreeQuote.jsx` |
| Fully licensed, bonded, and insured | Several existing location and service pages; verify the current bonding and insurance wording before using it in new campaigns |
| Project-specific neighborhood experience statements | Existing location pages contain statements about work throughout named neighborhoods; verify the project history supporting each statement |

The shared JSON-LD previously contained an aggregate rating of 5.0 from 47 reviews, three named reviews, a founding date, operating hours, a downtown Orlando ZIP code, and geographic coordinates. These unsupported structured-data fields were removed. No rating or review schema is now emitted.

## Business information requiring manual confirmation

- Confirm whether a public street address should appear on the website and Google Business Profile. No street address is emitted in schema.
- Confirm the official business start year before restoring `foundingDate` schema.
- Confirm public business hours before adding `openingHoursSpecification`.
- Confirm social profile URLs before expanding `sameAs` beyond the existing Google share/profile URL.
- Confirm whether "St. Cloud" or "Saint Cloud" is preferred in customer-facing copy. The new page uses Saint Cloud in prose and acknowledges the City of St. Cloud when referring to the jurisdiction.
- Confirm the scope and jurisdictions covered by current bonding and insurance.

## Conversion event names

The existing GA4 installation is preserved. The following `dataLayer` events are available for Google Tag Manager or GA4 configuration:

- `request_estimate_click` with `link_location`
- `request_estimate_submit` with `form_name`, `project_type`, and `source`
- `contact_form_submit` with `form_name`, `project_type`, and `county`
- `contact_click` with `contact_method` (`phone` or `email`) and `link_location`

## Manual Google actions

- Submit `https://j-nsw.com/sitemap.xml` in Google Search Console after deployment.
- Inspect and request indexing for the new canonical page: `https://j-nsw.com/ServiceAreaSaintCloud/`.
- Inspect the final trailing-slash versions of priority pages, not the redirecting no-slash variants.
- Configure GA4/GTM conversions from the event names above and test them in DebugView.
- Review Google Business Profile categories, services, service areas, phone, website, and business name for consistency with the site.
- Build legitimate local citations and request customer reviews through normal business operations; do not add review schema unless the reviews are visibly published and eligible under Google guidelines.

## Recommended off-site work

- Earn links and mentions from suppliers, chambers, trade associations, project partners, and local business organizations.
- Publish additional case studies only when project facts and original photography are available.
- Add verified project locations, scopes, challenges, and outcomes to future case studies.
- Monitor Search Console queries and landing pages monthly, then strengthen pages already receiving impressions before creating additional location or service pages.
