export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingMinutes: number;
  tags: string[];
  content: string;
};

export const articles: Article[] = [
  {
    slug: "month-end-close-checklist",
    title: "Month-End Close Checklist for Small Businesses",
    excerpt:
      "A practical step-by-step checklist to close your books accurately every month — and why a fast, clean close matters for your business.",
    publishedAt: "2026-06-10",
    readingMinutes: 6,
    tags: ["bookkeeping", "month-end close", "small business"],
    content: `
<h2>Why Month-End Close Matters</h2>
<p>The month-end close is the process of finalizing your financial records for a given month. Done well, it gives you accurate, up-to-date financial statements you can use to make decisions, prepare for tax season, and satisfy lenders or investors. Done poorly — or skipped — it leads to compounding errors that become painful and expensive to untangle at year-end.</p>
<p>For small business owners, the close often feels like a chore. But with the right checklist and the right process, it becomes routine. Here's how to do it.</p>

<h2>The Month-End Close Checklist</h2>

<h3>1. Reconcile All Bank and Credit Card Accounts</h3>
<p>Pull your bank statements and credit card statements for the month. In your accounting software (QuickBooks, Xero, or Wave), match every transaction against the statement. Investigate and clear any discrepancies before moving on. This is the most important step — everything else builds on reconciled accounts.</p>

<h3>2. Review and Categorize Transactions</h3>
<p>Scan for any uncategorized transactions. Make sure every expense and income item is assigned to the correct account. Miscategorized transactions cause your P&amp;L to mislead you and create problems at tax time.</p>

<h3>3. Record Depreciation and Amortization</h3>
<p>If you have fixed assets (equipment, vehicles, leasehold improvements), post the monthly depreciation journal entry. If you have prepaid expenses, record the amortization for the month.</p>

<h3>4. Post Accruals</h3>
<p>Accrue any expenses you've incurred but haven't yet paid — unpaid wages, interest, or invoices not yet received. Likewise, accrue revenue you've earned but not yet billed. Accruals ensure your financials reflect economic reality, not just cash movement.</p>

<h3>5. Review Accounts Receivable</h3>
<p>Check your AR aging report. Flag invoices that are 30, 60, or 90+ days overdue. Consider whether any receivables need to be written off or have an allowance set aside. Chasing late payments before they age further is much easier than recovering old debts.</p>

<h3>6. Review Accounts Payable</h3>
<p>Review outstanding bills. Confirm that all vendor invoices received during the month have been entered. Check for any duplicate payments or invoices.</p>

<h3>7. Reconcile Payroll</h3>
<p>Confirm that payroll journal entries match your payroll reports. Verify that payroll tax liabilities (US: 941 deposits; CA: CRA remittances; AU: STP submissions and super contributions) have been met on time.</p>

<h3>8. Review Inventory (if applicable)</h3>
<p>If you carry inventory, reconcile the balance in your accounting software against an actual count or warehouse system report. Write off any shrinkage or obsolete stock.</p>

<h3>9. Run a Trial Balance</h3>
<p>Generate a trial balance and review it for unusual account balances or unexpected variances compared to prior months. A big swing in an account is a signal to investigate before finalizing.</p>

<h3>10. Generate and Review Financial Statements</h3>
<p>Run your Profit &amp; Loss statement and Balance Sheet. Review them against your budget and against last month and last year. Understand the movements before you close.</p>

<h2>How Long Should a Month-End Close Take?</h2>
<p>For a small business with a clean process and up-to-date records, a month-end close should take 1–3 days. If yours takes a week or more, the root cause is usually transaction backlogs or reconciliation problems — which a virtual bookkeeping service like Books &amp; Beyond can resolve structurally.</p>

<h2>The Cost of Skipping the Close</h2>
<p>Businesses that don't close monthly often discover errors months or years later — at tax time, during an audit, or when seeking financing. Retroactive corrections are time-consuming, and in some cases require amended returns. A clean monthly close is genuinely cheaper in the long run.</p>

<p>If your month-end close is currently taking too long or producing unreliable results, <a href="/contact">get in touch</a> — we can help you build a process that works.</p>
`,
  },
  {
    slug: "gst-hst-filing-guide-canadian-saas",
    title: "GST/HST Filing Guide for Canadian SaaS Startups",
    excerpt:
      "Everything Canadian SaaS founders need to know about GST/HST registration, filing, input tax credits, and provincial obligations.",
    publishedAt: "2026-06-17",
    readingMinutes: 7,
    tags: ["GST/HST", "Canada", "SaaS", "tax filing"],
    content: `
<h2>Do Canadian SaaS Companies Need to Collect GST/HST?</h2>
<p>Yes — once your total taxable revenues exceed $30,000 CAD over any four consecutive calendar quarters, you are required to register for a GST/HST account with the CRA. For most SaaS startups, this threshold arrives quickly. And even before you hit it, voluntary registration can be advantageous because it lets you claim Input Tax Credits (ITCs) on your business expenses.</p>

<h2>GST vs. HST: What's the Difference?</h2>
<p>The Goods and Services Tax (GST) is a federal 5% tax. In participating provinces, it is combined with the provincial sales tax into the Harmonized Sales Tax (HST). The rate varies by province:</p>
<ul>
<li><strong>Ontario:</strong> 13% HST</li>
<li><strong>British Columbia:</strong> 5% GST + 7% PST (not harmonized)</li>
<li><strong>Alberta:</strong> 5% GST only (no provincial sales tax)</li>
<li><strong>Nova Scotia:</strong> 15% HST</li>
<li><strong>Quebec:</strong> 5% GST + 9.975% QST (separate provincial system)</li>
</ul>
<p>For most SaaS products sold B2B, you charge based on where the customer is located (the "place of supply" rules). Understanding these rules is critical to avoid under- or over-collecting.</p>

<h2>Place of Supply Rules for SaaS</h2>
<p>Digital services follow specific CRA place of supply rules. Generally, for B2B SaaS sales to Canadian customers, the rate is determined by the province or territory of the customer's billing address. For B2C sales, the rules can be more complex. If you are selling to customers outside Canada, those sales are zero-rated — no GST/HST applies.</p>

<h2>Input Tax Credits (ITCs)</h2>
<p>One of the most important benefits of GST/HST registration is the ability to claim ITCs — refunds of GST/HST you've paid on eligible business inputs. This includes:</p>
<ul>
<li>Software subscriptions (AWS, Google Workspace, Stripe fees)</li>
<li>Accounting and legal fees</li>
<li>Office expenses</li>
<li>Equipment purchases</li>
</ul>
<p>Keeping accurate records of all GST/HST paid on inputs is essential. Your accounting software (QuickBooks, Xero, or Wave) should track this automatically if set up correctly.</p>

<h2>Filing Frequency</h2>
<p>CRA assigns a filing frequency based on your annual taxable revenue:</p>
<ul>
<li><strong>Under $1.5M:</strong> Annual filing (with optional monthly or quarterly)</li>
<li><strong>$1.5M – $6M:</strong> Quarterly filing</li>
<li><strong>Over $6M:</strong> Monthly filing</li>
</ul>
<p>Even if you're assigned annual filing, many SaaS companies opt for quarterly to keep the filing manageable and avoid a large year-end payment.</p>

<h2>Quebec: The QST Wrinkle</h2>
<p>Quebec operates its own provincial sales tax system (QST) separately from the federal GST. If you have significant revenue from Quebec customers, you may need to register with Revenu Québec as well. This is a common oversight for SaaS founders who assume GST/HST registration covers everything.</p>

<h2>Non-Resident SaaS Companies Selling to Canadians</h2>
<p>If your SaaS company is based outside Canada but sells to Canadian customers, the CRA's "simplified registration regime" may require you to register and remit GST/HST on sales to Canadian consumers (not B2B). This has applied since 2021 and catches many US or UK SaaS companies by surprise.</p>

<h2>Getting It Right</h2>
<p>GST/HST compliance for SaaS has more complexity than it first appears — place of supply rules, input tax credit tracking, Quebec registration, and non-resident obligations all create room for error. <a href="/ca">Our Canadian accounting team</a> handles this for dozens of SaaS companies. If you want your GST/HST sorted properly, <a href="/contact">get in touch</a>.</p>
`,
  },
  {
    slug: "quickbooks-vs-xero",
    title: "QuickBooks vs Xero: Which Is Right for Your Business?",
    excerpt:
      "An honest comparison of QuickBooks and Xero for small businesses — covering features, pricing, integrations, and which to choose based on your market.",
    publishedAt: "2026-06-24",
    readingMinutes: 6,
    tags: ["QuickBooks", "Xero", "accounting software", "small business"],
    content: `
<h2>The Short Answer</h2>
<p>Both QuickBooks and Xero are excellent accounting platforms. QuickBooks tends to have an edge for US businesses due to deeper IRS compliance features and broader accountant familiarity. Xero is often preferred in Australia and the UK, and has strong multi-currency support that makes it a good choice for businesses operating across borders.</p>

<h2>QuickBooks: Strengths and Weaknesses</h2>
<h3>Strengths</h3>
<ul>
<li><strong>US tax features:</strong> Built-in 1099 tracking, payroll (QuickBooks Payroll), sales tax nexus management, and deep IRS integration make it the default choice for US-focused businesses.</li>
<li><strong>Accountant ecosystem:</strong> The vast majority of US accountants are QuickBooks-certified. If you want to hand files to a local CPA at year-end, QuickBooks is the safest bet.</li>
<li><strong>Reporting:</strong> Extensive built-in reports with good customization. The Profit &amp; Loss and Balance Sheet are well-structured for US GAAP.</li>
<li><strong>Desktop option:</strong> QuickBooks Desktop exists for businesses that need to work offline, though Intuit is pushing hard toward the online version.</li>
</ul>
<h3>Weaknesses</h3>
<ul>
<li><strong>Pricing:</strong> QuickBooks Online has increased prices significantly in recent years and can become expensive at higher tiers.</li>
<li><strong>User experience:</strong> Many users find the interface clunkier than Xero, particularly for bank reconciliation.</li>
<li><strong>Multi-currency:</strong> Technically available but less polished than Xero's implementation.</li>
</ul>

<h2>Xero: Strengths and Weaknesses</h2>
<h3>Strengths</h3>
<ul>
<li><strong>User interface:</strong> Xero is widely praised for its clean, modern UX. Bank reconciliation in particular is fast and intuitive.</li>
<li><strong>Multi-currency:</strong> First-class multi-currency support at all paid tiers. Critical for businesses with international operations.</li>
<li><strong>Australia:</strong> Xero is the dominant platform in Australia. BAS lodgement, STP payroll, and super compliance are all built in and regularly updated to match ATO requirements.</li>
<li><strong>Unlimited users:</strong> All Xero plans include unlimited users — a significant advantage over QuickBooks' per-user pricing.</li>
<li><strong>Add-ons ecosystem:</strong> Xero's app marketplace has hundreds of integrations including Stripe, Shopify, Gusto, and more.</li>
</ul>
<h3>Weaknesses</h3>
<ul>
<li><strong>US market maturity:</strong> Xero has grown its US presence but still has fewer US-based accountants fluent with it compared to QuickBooks.</li>
<li><strong>Payroll (US):</strong> Xero's US payroll is handled via integration partners rather than natively.</li>
<li><strong>Reporting:</strong> While Xero's reports are solid, advanced custom reporting requires third-party tools like Syft or Spotlight Reporting.</li>
</ul>

<h2>Which Should You Choose?</h2>
<p>Here's a simple decision framework:</p>
<ul>
<li><strong>US business, mostly domestic:</strong> QuickBooks Online is the safe default. Your accountant almost certainly knows it.</li>
<li><strong>Australian business:</strong> Xero. Full stop. The ATO compliance features are far superior to QuickBooks' Australian offering.</li>
<li><strong>Canadian business:</strong> Either works well. QuickBooks is more common; Xero is growing. Wave is also worth considering if you want a free option for simpler needs.</li>
<li><strong>Multi-country or international:</strong> Xero's multi-currency and international support gives it the edge.</li>
<li><strong>E-commerce business:</strong> Both integrate well with Shopify and WooCommerce. Evaluate based on your country and accountant preference.</li>
</ul>

<h2>What About Migration?</h2>
<p>Switching platforms mid-year is possible but adds complexity. If you're setting up a new business, this is the right time to choose. If you're thinking of switching, do it at the start of a new financial year to avoid messy comparative periods.</p>
<p>Books &amp; Beyond works with both QuickBooks and Xero (and Wave and MYOB for CA and AU clients). We can work in whatever platform you're already using — no migration required. <a href="/services">See all our services</a> or <a href="/contact">book a call</a>.</p>
`,
  },
  {
    slug: "irs-audit-red-flags-small-business",
    title: "IRS Audit Red Flags: What Small Businesses Need to Know",
    excerpt:
      "The most common triggers that increase your chances of an IRS audit — and what to do if you receive an audit notice.",
    publishedAt: "2026-07-01",
    readingMinutes: 7,
    tags: ["IRS", "audit", "US tax", "small business"],
    content: `
<h2>How Likely Is an IRS Audit?</h2>
<p>The overall audit rate for individual returns is around 0.4%. For small businesses, particularly Schedule C filers and S-corps, the rate is higher — especially if your return contains certain patterns the IRS flags automatically. Understanding those patterns helps you avoid unnecessary scrutiny and keeps your books audit-ready.</p>

<h2>Common IRS Audit Red Flags</h2>

<h3>1. Large or Consistent Business Losses</h3>
<p>Reporting a business loss year after year — particularly if those losses offset significant W-2 income — raises questions about whether the activity is a genuine business or a hobby. The IRS applies a "profit motive" test: if your business shows a profit in at least 3 of 5 consecutive years, it's generally presumed to be a real business. Consistent losses invite scrutiny.</p>

<h3>2. Home Office Deductions</h3>
<p>Home office deductions are legitimate and often valuable, but they're also frequently abused. The IRS requires the space to be used "regularly and exclusively" for business. If you're taking a large home office deduction, make sure your calculations are accurate and you can document the exclusive business use.</p>

<h3>3. Round Numbers Everywhere</h3>
<p>Real expenses are rarely round numbers. If your deductions consistently show $5,000, $10,000, $15,000 — the IRS's automated systems notice. Estimated or fabricated expenses tend to be round; actual expenses tend not to be.</p>

<h3>4. High Meals and Entertainment Deductions</h3>
<p>Post-TCJA (2018), business meals are 50% deductible, and entertainment is generally no longer deductible. A meals deduction that's out of proportion with your revenue type is a flag. Every meal deduction should have documentation: who was present, the business purpose, and the receipt.</p>

<h3>5. Vehicle Use Deductions</h3>
<p>Claiming 100% business use of a vehicle is always suspicious unless the vehicle is clearly only for business (a delivery truck, for example). If you're claiming 95% or 100% business use on a vehicle that could plausibly be used personally, expect questions. A contemporaneous mileage log is your best defense.</p>

<h3>6. Cash-Heavy Businesses</h3>
<p>Restaurants, retailers, and service businesses with significant cash revenue are statistically more likely to be audited because under-reporting cash income is common. If you operate a cash-heavy business, meticulous records of every cash receipt are essential.</p>

<h3>7. Mismatched 1099s</h3>
<p>The IRS receives copies of every 1099 issued to you. If the income reported on your return doesn't match the 1099s on file with the IRS, their automated matching system (the Automated Underreporter program) will flag it and send you a CP2000 notice. This is one of the most common triggers and one of the most avoidable — track all 1099 income carefully.</p>

<h3>8. Deducting Personal Expenses as Business Expenses</h3>
<p>Clothing, personal vacations, personal meals, or personal electronics that are deducted as business expenses are a major risk. The line between business and personal can be gray — but the IRS has seen every justification, and auditors are skeptical of borderline deductions.</p>

<h2>What To Do If You Receive an Audit Notice</h2>
<p>First: don't panic. Most "audits" are correspondence audits — a letter asking you to substantiate a specific item on your return. This is very different from a field audit where an agent comes to your place of business.</p>
<p>Second: respond promptly. Ignoring an IRS notice makes the problem worse. You have a right to request an extension if you need time to gather documentation.</p>
<p>Third: get professional help. Even for a correspondence audit, having an accountant respond on your behalf tends to produce better outcomes. For a field audit, professional representation is essentially non-negotiable.</p>

<p><a href="/us">Books &amp; Beyond's US accounting team</a> prepares audit-ready workpapers for every client and provides audit support if you're ever contacted by the IRS. If you need help responding to a notice, <a href="/contact">get in touch</a>.</p>
`,
  },
  {
    slug: "bas-lodgement-guide-australia",
    title: "BAS Lodgement Guide for Australian Sole Traders",
    excerpt:
      "A plain-English guide to Business Activity Statements — what BAS is, what to include, when it's due, and how to avoid common mistakes.",
    publishedAt: "2026-07-08",
    readingMinutes: 6,
    tags: ["BAS", "Australia", "ATO", "sole trader", "GST"],
    content: `
<h2>What Is a BAS?</h2>
<p>A Business Activity Statement (BAS) is a form submitted to the Australian Taxation Office (ATO) that reports your business's tax obligations for a given period. Most commonly, it covers:</p>
<ul>
<li><strong>GST</strong> — the 10% Goods and Services Tax you've collected from customers, minus the GST you've paid on business expenses (input tax credits)</li>
<li><strong>PAYG withholding</strong> — tax withheld from employee wages</li>
<li><strong>PAYG instalments</strong> — prepayments of your own income tax</li>
</ul>
<p>If you're a sole trader registered for GST, you'll need to lodge a BAS — either monthly, quarterly, or annually depending on your turnover and ATO instructions.</p>

<h2>Do You Need to Register for GST?</h2>
<p>You must register for GST if your annual turnover is $75,000 or more (or $150,000 for non-profit bodies). Ride-share and taxi drivers must register regardless of turnover. Once registered, you must lodge a BAS.</p>
<p>Even if you're under the threshold, voluntary registration can make sense if you incur significant GST on your business expenses — it lets you claim those back as input tax credits.</p>

<h2>BAS Lodgement Frequency</h2>
<p>The ATO assigns your lodgement frequency:</p>
<ul>
<li><strong>Monthly:</strong> If your annual turnover exceeds $20 million</li>
<li><strong>Quarterly:</strong> Most small businesses (turnover $75K–$20M)</li>
<li><strong>Annual:</strong> If the ATO has granted you annual lodgement (turnover under $75K and voluntarily registered)</li>
</ul>
<p>Quarterly lodgement dates are typically the 28th of the month following the quarter-end (October 28, February 28, April 28, July 28). If your BAS is prepared by a registered tax agent, you may get an extended due date.</p>

<h2>What Goes on a Quarterly BAS?</h2>
<h3>GST Section</h3>
<p>You report:</p>
<ul>
<li><strong>G1 — Total sales:</strong> All sales including GST-free and input-taxed sales</li>
<li><strong>G2 — Export sales:</strong> If you export goods or services</li>
<li><strong>G3 — Other GST-free sales:</strong> Fresh food, basic health services, etc.</li>
<li><strong>G10 — Capital purchases:</strong> Business assets you purchased</li>
<li><strong>G11 — Other purchases:</strong> All other business expenses</li>
</ul>
<p>The ATO calculates your net GST from these figures (GST collected minus input tax credits).</p>

<h3>PAYG Withholding Section</h3>
<p>If you have employees, report the total withholding for the quarter at W1 and W2.</p>

<h2>Common BAS Mistakes to Avoid</h2>
<p><strong>Claiming GST on non-GST purchases:</strong> Some expenses don't include GST — bank fees, wages, insurance (some), and purchases from unregistered suppliers. Claiming input tax credits on these is an error.</p>
<p><strong>Missing the due date:</strong> Late BAS lodgement attracts Failure to Lodge (FTL) penalties. These accumulate weekly. Getting into a habit of lodging on time is far less painful than paying penalties.</p>
<p><strong>Incorrect GST codes in Xero or MYOB:</strong> If your accounting software has incorrect tax codes set up, your BAS figures will be wrong from the start. A chart of accounts review is worthwhile if you're not sure.</p>
<p><strong>Not keeping records:</strong> The ATO requires you to keep records for 5 years. Every invoice, receipt, and bank statement is evidence. Cloud accounting software like Xero makes this much easier to maintain.</p>

<h2>Using a Tax Agent for BAS</h2>
<p>A registered tax agent (or BAS agent) can lodge on your behalf and typically gets an extended due date from the ATO — often an additional month. For sole traders with complex GST situations or heavy transaction volumes, the cost of a BAS agent is usually worth it.</p>

<p><a href="/au">Books &amp; Beyond's Australian team</a> is ATO-registered and handles BAS lodgement as part of our bookkeeping and tax services. If your BAS is overdue or you want a clean process going forward, <a href="/contact">get in touch</a>.</p>
`,
  },
  {
    slug: "single-touch-payroll-xero-setup",
    title: "How to Set Up Single Touch Payroll (STP) in Xero",
    excerpt:
      "A step-by-step guide to configuring Single Touch Payroll in Xero for Australian businesses — including Phase 2 requirements.",
    publishedAt: "2026-07-15",
    readingMinutes: 7,
    tags: ["STP", "Single Touch Payroll", "Xero", "Australia", "payroll"],
    content: `
<h2>What Is Single Touch Payroll?</h2>
<p>Single Touch Payroll (STP) is an ATO reporting system that requires employers to report salary and wage information, PAYG withholding, and super information to the ATO every time they run payroll — in real time, directly from their payroll software. STP has been mandatory for all Australian employers since 2019 (Phase 1) and was upgraded to STP Phase 2 in 2022, which introduced more granular reporting including income types, disaggregated gross amounts, and child support deductions.</p>

<h2>Before You Start: What You Need</h2>
<p>Before setting up STP in Xero, make sure you have:</p>
<ul>
<li>An active Xero account with the Payroll module enabled (Xero Standard or Premium, or a payroll add-on)</li>
<li>Your Australian Business Number (ABN)</li>
<li>Your business address and contact details</li>
<li>Tax File Numbers (TFNs) for all employees</li>
<li>Employee superannuation fund details</li>
</ul>

<h2>Step 1: Enable Payroll in Xero</h2>
<p>Go to <strong>Payroll &gt; Overview</strong> in Xero. If prompted, select Australia as your payroll region. Enter your organisation details including your ABN, payroll contact name, and business address. These details are transmitted to the ATO with every STP event, so accuracy matters.</p>

<h2>Step 2: Set Up Your Pay Calendars</h2>
<p>Navigate to <strong>Payroll &gt; Pay Calendars</strong>. Create a pay calendar for each pay frequency you use — weekly, fortnightly, monthly. Assign the appropriate calendar to each employee in their employee record.</p>

<h2>Step 3: Add Employee Records</h2>
<p>For each employee, you need to enter:</p>
<ul>
<li>Personal details: name, address, date of birth</li>
<li>Tax details: TFN, tax scale (resident, non-resident, working holiday maker, etc.)</li>
<li>Employment details: start date, employment type (full-time, part-time, casual), income type (STP Phase 2 requires this — salary and wages, closely held payee, labour hire, etc.)</li>
<li>Superannuation: fund name, USI, member number, contribution rates</li>
<li>Bank account for direct deposit</li>
</ul>

<h2>Step 4: Connect Xero to the ATO</h2>
<p>Go to <strong>Payroll &gt; Single Touch Payroll</strong>. Click <strong>Connect to ATO</strong>. Xero will guide you through the connection process, which involves confirming your ABN and authorising Xero as a sending software. Once connected, a green "Connected" status should appear.</p>
<p>If your business is a closely held entity (e.g., a family company paying directors or shareholders), you may need to use a separate reporting pathway — check the ATO's closely held payees guidance.</p>

<h2>Step 5: Run Your First Pay Run and STP Submission</h2>
<p>Process a pay run as normal. When you finalise the pay run, Xero will present an option to file via STP. Review the figures and click <strong>Submit</strong>. Xero sends the data to the ATO, and you'll receive a confirmation status (Accepted, Pending, or Error) within the Xero interface.</p>

<h2>STP Phase 2: Key Changes</h2>
<p>STP Phase 2 introduced several changes that many businesses found complex to implement:</p>
<ul>
<li><strong>Disaggregated gross:</strong> Gross wages must now be broken down into gross salary/wages, allowances (by type), overtime, bonuses, and directors' fees separately — rather than a single gross figure.</li>
<li><strong>Income types:</strong> Each employee must be assigned an income type (SAW — salary and wages, CHP — closely held payees, etc.)</li>
<li><strong>Child support:</strong> Deductions for child support garnishees must be reported separately.</li>
<li><strong>Employment conditions:</strong> Basis of employment must be reported for each employee.</li>
</ul>
<p>In Xero, most Phase 2 requirements are handled within the employee record and earnings rate setup. Xero has specific earnings rate categories that map to ATO STP Phase 2 codes — make sure your earnings rates (overtime, allowances, bonuses) are categorised correctly.</p>

<h2>Fixing STP Errors</h2>
<p>If a submission returns an error status, click into the STP filing in Xero to see the error codes. Common errors include invalid TFNs, missing super fund USIs, and mismatched ABNs. Fix the underlying employee record and resubmit.</p>

<h2>Year-End EOFY Finalisation</h2>
<p>At financial year-end (June 30), you need to submit an STP finalisation event. This confirms to the ATO that your payroll year is complete. It effectively replaces the old Payment Summary process. Employees can then access their income statement (equivalent to the old group certificate) through myGov.</p>

<p>If your STP setup is giving you trouble or your Phase 2 transition isn't complete, <a href="/au">our Australian payroll team</a> can review your Xero configuration and get you compliant. <a href="/contact">Book a call</a> to get started.</p>
`,
  },
];
