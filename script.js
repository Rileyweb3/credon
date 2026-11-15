const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mainNav.classList.toggle('open', open);
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  mainNav.classList.remove('open');
}));

const content = document.querySelector('#demo-content');
const tabs = [...document.querySelectorAll('.demo-tab')];
const views = {
  business: {
    title: 'Business dashboard', subtitle: 'An overview of business and trade activity.',
    html: `<div class="demo-title-row"><div><h3>Good morning, Amara</h3><p>Here’s an overview of your trade activity.</p></div><span class="demo-demo-label">ILLUSTRATIVE DATA</span></div>
      <div class="demo-kpis"><div class="demo-kpi"><span>ACTIVE REQUESTS</span><b>02 <small>requests</small></b></div><div class="demo-kpi"><span>TRADE ACTIVITY</span><b>03 <small>in progress</small></b></div><div class="demo-kpi"><span>REPAYMENT STATUS</span><b>On track <small class="positive">●</small></b></div><div class="demo-kpi"><span>BUSINESS REVIEW</span><b><small class="state-pill review">IN REVIEW</small></b></div></div>
      <div class="demo-block"><div class="demo-block-head">Recent financing requests <button data-goto="requests">View all ↗</button></div><table class="demo-table"><thead><tr><th>TRADE REQUEST</th><th>AMOUNT</th><th>STATUS</th><th>UPDATED</th></tr></thead><tbody><tr><td>Consumer electronics shipment<span class="sub">Lagos, Nigeria · Electronics</span></td><td>$48,000</td><td><span class="state-pill review">Under review</span></td><td>12 Jun 2025</td></tr><tr><td>Solar components<span class="sub">Accra, Ghana · Energy</span></td><td>$32,500</td><td><span class="state-pill neutral">Draft</span></td><td>08 Jun 2025</td></tr></tbody></table></div>
      <div class="demo-columns"><div class="demo-block"><div class="demo-block-head">Business profile <span class="state-pill review">REVIEW IN PROGRESS</span></div><div class="profile-card"><div class="profile-avatar">AD</div><div><b>Acme Distribution Ltd.</b><small>Illustrative business · Lagos, Nigeria</small></div></div><div class="profile-details"><div><span>BUSINESS TYPE</span><b>Electronics importer</b></div><div><span>PROFILE CREATED</span><b>03 Jun 2025</b></div></div></div><div class="demo-block"><div class="demo-block-head">Recent activity</div><div class="activity-list"><div class="activity-item"><i></i> Trade request submitted <small>12 Jun</small></div><div class="activity-item"><i></i> Supplier details added <small>10 Jun</small></div><div class="activity-item"><i></i> Profile created <small>03 Jun</small></div></div></div></div>`
  },
  requests: {
    title: 'Financing requests', subtitle: 'A proposed workflow for submitting a trade opportunity.',
    html: `<div class="demo-title-row"><div><h3>New financing request</h3><p>Provide information about the trade for an initial review.</p></div><span class="demo-demo-label">DEMONSTRATION</span></div>
      <div class="demo-info">Illustrative sample only. This is not a live financing application and no funding decision is implied.</div>
      <div class="demo-block"><div class="demo-block-head">Trade details <span class="state-pill neutral">DRAFT PREVIEW</span></div><div class="demo-content" style="padding:13px"><div class="demo-form-grid"><div class="demo-field full"><label>TRADE DESCRIPTION</label><b>Consumer electronics shipment for retail distribution</b></div><div class="demo-field"><label>SUPPLIER</label><b>Meridian Components Co. · Sample</b></div><div class="demo-field"><label>FINANCING AMOUNT</label><b>USD $48,000</b></div><div class="demo-field"><label>TRADE CATEGORY</label><b>Electronics & devices</b></div><div class="demo-field"><label>DESTINATION COUNTRY</label><b>Nigeria</b></div><div class="demo-field"><label>EXPECTED SHIPMENT</label><b>18 August 2025</b></div><div class="demo-field"><label>ESTIMATED DURATION</label><b>90 days</b></div></div>
      <div class="demo-block-head" style="padding:12px 0 8px;margin-top:8px;border:0">Supporting documents <span class="state-pill review">REVIEW REQUIRED</span></div><div class="document-row"><span class="document-icon">▤</span><span><b>Pro forma invoice</b><small>Sample document · Illustrative</small></span><span class="state-pill neutral">ATTACHED</span></div><div class="document-row"><span class="document-icon">▤</span><span><b>Supplier quotation</b><small>Sample document · Illustrative</small></span><span class="state-pill neutral">ATTACHED</span></div><div class="demo-actions"><button class="demo-action primary" data-message="This preview does not submit an application.">Submit for review <span>→</span></button><button class="demo-action" data-message="Draft details shown for demonstration only.">Save draft</button></div></div></div>`
  },
  capital: {
    title: 'Capital provider', subtitle: 'An illustrative view of opportunity assessment.',
    html: `<div class="demo-title-row"><div><h3>Explore opportunities</h3><p>Sample trade requests for concept demonstration.</p></div><span class="demo-demo-label">NOT INVESTMENT OPPORTUNITIES</span></div>
      <div class="demo-kpis"><div class="demo-kpi"><span>SAMPLE OPPORTUNITIES</span><b>04 <small>illustrative</small></b></div><div class="demo-kpi"><span>TRADE CATEGORIES</span><b>03 <small>categories</small></b></div><div class="demo-kpi"><span>AVERAGE DURATION</span><b>90 <small>days</small></b></div><div class="demo-kpi"><span>REVIEW STATUS</span><b>Varies <small>per request</small></b></div></div>
      <div class="demo-columns" style="margin-top:12px"><div class="demo-block" style="margin-top:0"><div class="demo-block-head">Sample opportunities <span>SELECT TO REVIEW</span></div><div class="opportunity selected" data-opportunity="electronics"><div><div class="opp-title">Consumer electronics shipment</div><div class="opp-sub">Electronics · Nigeria · 90 days</div></div><div class="opp-amount">$48,000<small>REQUESTED</small></div></div><div class="opportunity" data-opportunity="solar"><div><div class="opp-title">Solar components purchase</div><div class="opp-sub">Energy · Ghana · 120 days</div></div><div class="opp-amount">$32,500<small>REQUESTED</small></div></div><div class="opportunity" data-opportunity="agri"><div><div class="opp-title">Agricultural packaging</div><div class="opp-sub">Agriculture · Kenya · 75 days</div></div><div class="opp-amount">$21,000<small>REQUESTED</small></div></div></div><div class="demo-block" style="margin-top:0" id="opportunity-details"><div class="demo-block-head">Opportunity assessment <span class="state-pill review">ILLUSTRATIVE</span></div><div class="opp-details"><h4>Consumer electronics shipment</h4><p>Sample importer seeks working capital for an international supplier payment. Shipment, supplier and business information are fictional and have not been verified.</p><div class="risk-row"><span>Business review</span><b>Not verified</b></div><div class="risk-row"><span>Supplier details</span><b>Illustrative only</b></div><div class="risk-row"><span>Commercial risk</span><b>Requires assessment</b></div><div class="risk-row"><span>Funding status</span><b>Not available</b></div></div></div></div><div class="demo-info">No genuine financing opportunities are shown. Commercial financing involves risk; sample requests do not imply any offer, availability or expected return.</div>`
  },
  tracking: {
    title: 'Trade monitoring', subtitle: 'An illustrative shipment timeline and milestone record.',
    html: `<div class="demo-title-row"><div><h3>Shipment progress</h3><p>Sample trade ID · CD-DEMO-0248</p></div><span class="demo-demo-label">ILLUSTRATIVE SHIPMENT</span></div><div class="demo-columns"><div class="demo-block" style="margin-top:0"><div class="demo-block-head">Milestone timeline <span class="state-pill neutral">DEMO DATA</span></div><div class="demo-content" style="padding:16px 17px"><div class="timeline"><div class="timeline-item done"><b>Financing approved</b><small>Illustrative milestone · 02 Aug 2025</small><span class="milestone-state">RECORDED</span></div><div class="timeline-item done"><b>Supplier payment completed</b><small>Illustrative milestone · 04 Aug 2025</small><span class="milestone-state">RECORDED</span></div><div class="timeline-item done"><b>Shipment dispatched</b><small>Illustrative milestone · 18 Aug 2025</small><span class="milestone-state">RECORDED</span></div><div class="timeline-item current"><b>Shipment in transit</b><small>Sample update · 22 Aug 2025</small><span class="milestone-state">IN TRANSIT</span></div><div class="timeline-item"><b>Goods delivered</b><small>Pending in this sample timeline</small></div><div class="timeline-item"><b>Repayment initiated</b><small>Pending in this sample timeline</small></div></div></div></div><div><div class="demo-block" style="margin-top:0"><div class="demo-block-head">Trade overview</div><div class="profile-details" style="border-top:0"><div><span>TRADE</span><b>Consumer electronics</b></div><div><span>ROUTE</span><b>Shenzhen → Lagos</b></div><div><span>CARRIER</span><b>Sample freight partner</b></div><div><span>DESTINATION</span><b>Lagos, Nigeria</b></div></div></div><div class="demo-info">Milestones are illustrative records and are not independently validated. A smart contract cannot itself confirm physical shipment or delivery.</div></div></div>`
  },
  agreement: {
    title: 'Agreement preview', subtitle: 'A proposed way to display agreed financing terms.',
    html: `<div class="demo-title-row"><div><h3>Financing agreement</h3><p>Sample agreement reference · CDA-DEMO-0081</p></div><span class="demo-demo-label">CONCEPT PREVIEW</span></div><div class="demo-info">This illustrative screen is not a legal agreement or offer. Terms below are fictional and shown to explain a possible interface.</div><div class="demo-block"><div class="demo-block-head">Proposed agreement terms <span class="state-pill neutral">SAMPLE · NOT EXECUTED</span></div><div class="demo-content" style="padding:13px"><div class="agreement-terms"><div class="agreement-term"><small>FINANCING AMOUNT</small><b>USD $48,000</b></div><div class="agreement-term"><small>AGREED DURATION</small><b>90 days</b></div><div class="agreement-term"><small>REPAYMENT TERMS</small><b>As mutually agreed</b></div></div><div class="agreement-parties"><div><span>BUSINESS</span><b>Acme Distribution Ltd. · Sample</b></div><div><span>CAPITAL PROVIDER</span><b>Illustrative party · Not assigned</b></div></div><div class="demo-block" style="margin-top:12px"><div class="demo-block-head">Agreement record</div><div class="profile-details"><div><span>AGREEMENT STATUS</span><b>Conceptual preview</b></div><div><span>SMART-CONTRACT REFERENCE</span><b>Not deployed</b></div><div><span>TERMS RECORDED</span><b>Subject to agreement</b></div><div><span>PHYSICAL VERIFICATION</span><b>Independent evidence required</b></div></div></div></div></div><div class="demo-info">Smart contracts may structure agreements and record transactions; they cannot independently verify physical-world events. Legal agreements and independent verification remain important.</div>`
  },
  records: {
    title: 'Activity records', subtitle: 'A transparent ledger concept for financing events.',
    html: `<div class="demo-title-row"><div><h3>Financing activity</h3><p>Illustrative records for one sample trade.</p></div><span class="demo-demo-label">DEMONSTRATION DATA</span></div><div class="demo-kpis"><div class="demo-kpi"><span>SAMPLE RECORDS</span><b>05 <small>events</small></b></div><div class="demo-kpi"><span>AGREEMENT</span><b><small class="state-pill neutral">CONCEPT ONLY</small></b></div><div class="demo-kpi"><span>TRADE ID</span><b style="font-size:12px">CD-DEMO-0248</b></div><div class="demo-kpi"><span>NETWORK STATUS</span><b style="font-size:12px">Not connected</b></div></div><div class="demo-block"><div class="demo-block-head">Transaction and activity log <div class="record-filter"><button class="active" data-filter="all">All events</button><button data-filter="Financing">Financing</button><button data-filter="Trade">Trade</button><button data-filter="Agreement">Agreement</button></div></div><table class="demo-table"><thead><tr><th>EVENT TYPE</th><th>DESCRIPTION</th><th>REFERENCE</th><th>DATE</th><th>STATUS</th></tr></thead><tbody id="records-body"><tr data-kind="Financing"><td><span class="record-type">Financing</span></td><td>Sample allocation record<span class="sub">Illustrative financing activity</span></td><td>TX-DEMO-1001</td><td>02 Aug 2025</td><td><span class="state-pill neutral">SAMPLE</span></td></tr><tr data-kind="Trade"><td><span class="record-type">Trade</span></td><td>Shipment milestone updated<span class="sub">Illustrative dispatch event</span></td><td>EV-DEMO-0482</td><td>18 Aug 2025</td><td><span class="state-pill neutral">SAMPLE</span></td></tr><tr data-kind="Agreement"><td><span class="record-type">Agreement</span></td><td>Terms record created<span class="sub">No agreement executed</span></td><td>AG-DEMO-0081</td><td>01 Aug 2025</td><td><span class="state-pill neutral">CONCEPT</span></td></tr><tr data-kind="Trade"><td><span class="record-type">Trade</span></td><td>In-transit update<span class="sub">Illustrative milestone update</span></td><td>EV-DEMO-0483</td><td>22 Aug 2025</td><td><span class="state-pill review">PENDING REVIEW</span></td></tr><tr data-kind="Financing"><td><span class="record-type">Financing</span></td><td>Repayment record<span class="sub">No repayment has occurred</span></td><td>TX-DEMO-1002</td><td>—</td><td><span class="state-pill neutral">NOT RECORDED</span></td></tr></tbody></table></div><div class="demo-info">These sample records are not on-chain transactions and do not refer to a live network.</div>`
  }
};
function showView(name) {
  const view = views[name] || views.business;
  content.innerHTML = view.html;
  document.querySelector('#demo-breadcrumb').textContent = view.title;
  tabs.forEach(tab => {
    const active = tab.dataset.view === name;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });
}
tabs.forEach(tab => tab.addEventListener('click', () => showView(tab.dataset.view)));
content.addEventListener('click', event => {
  const goto = event.target.closest('[data-goto]');
  if (goto) showView(goto.dataset.goto);
  const message = event.target.closest('[data-message]');
  if (message) {
    const info = content.querySelector('.demo-info');
    if (info) info.textContent = message.dataset.message;
  }
  const opportunity = event.target.closest('[data-opportunity]');
  if (opportunity) {
    content.querySelectorAll('.opportunity').forEach(row => row.classList.toggle('selected', row === opportunity));
    const detail = content.querySelector('#opportunity-details .opp-details h4');
    const description = content.querySelector('#opportunity-details .opp-details p');
    if (opportunity.dataset.opportunity === 'solar') {
      detail.textContent = 'Solar components purchase';
      description.textContent = 'Sample Ghanaian importer seeks capital for a solar components purchase. Business, supplier and trade details are fictional and have not been verified.';
    } else if (opportunity.dataset.opportunity === 'agri') {
      detail.textContent = 'Agricultural packaging';
      description.textContent = 'Sample Kenyan business seeks working capital for packaging imports. Business, supplier and trade details are fictional and have not been verified.';
    } else {
      detail.textContent = 'Consumer electronics shipment';
      description.textContent = 'Sample importer seeks working capital for an international supplier payment. Shipment, supplier and business information are fictional and have not been verified.';
    }
  }
  const filter = event.target.closest('[data-filter]');
  if (filter) {
    content.querySelectorAll('.record-filter button').forEach(button => button.classList.toggle('active', button === filter));
    content.querySelectorAll('#records-body tr').forEach(row => row.hidden = filter.dataset.filter !== 'all' && row.dataset.kind !== filter.dataset.filter);
  }
});
showView('business');
