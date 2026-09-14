/**
 * Terms of Service content, transcribed from "Codebase Rules.md" → Page 5.
 *
 * Rules held to here:
 *  - nothing is invented; answers are the source answers
 *  - "[Not specified in source]" is kept verbatim and rendered as a visible
 *    placeholder so it cannot be shipped by accident
 *  - duplicated source blocks are removed, not repeated
 */

export type TermsItem = {
  id: string;
  q: string;
  /** Lead answer. Kept short and self-contained so it stands alone. */
  a: string;
  /** Optional supporting detail, rendered as a list under the answer. */
  list?: string[];
};

export type TermsTab = { id: string; label: string; items: TermsItem[] };

export const termsTabs: TermsTab[] = [
  {
    id: 'payment',
    label: 'Payment',
    items: [
      { id: 'pay-currency', q: 'What currencies does the store display and charge in?', a: 'USD or EUR.' },
      { id: 'pay-methods', q: 'What payment methods do you accept?', a: 'Direct payment when the order is placed, through Shopify.' },
      { id: 'pay-financing', q: 'Do you offer financing or installment payments?', a: 'No.' },
      {
        id: 'pay-when',
        q: 'When is the customer charged?',
        a: 'When the order is accepted.',
        list: ['At checkout — no', 'When the order is accepted — yes', 'When the product is shipped — no'],
      },
      { id: 'pay-deposit', q: 'Do you accept deposits or pre-orders?', a: 'Yes.' },
      { id: 'pay-deposit-terms', q: 'Is the deposit refundable, transferable or non-refundable?', a: 'Transferable.' },
      { id: 'pay-tax', q: 'Are prices inclusive of sales tax or VAT, or is tax added at checkout?', a: 'No additional taxes are charged.' },
      { id: 'pay-duty', q: 'Who bears tariffs, import taxes and customs fees?', a: 'Panquire bears them.' },
      { id: 'pay-shipping-line', q: 'Is shipping shown at checkout or calculated separately?', a: 'Either is acceptable; both are available.' },
      { id: 'pay-failed', q: 'How are failed, voided, disputed or charged-back payments handled?', a: '[Not specified in source]' },
      { id: 'pay-adjust', q: 'Do you manually adjust order prices after checkout?', a: '[Not specified in source]' },
      { id: 'pay-refund-time', q: 'After an approved cancellation or return, how long does a refund take?', a: '1–3 days.' },
    ],
  },
  {
    id: 'shipping',
    label: 'Shipping',
    items: [
      { id: 'ship-regions', q: 'Which countries and regions do you ship to?', a: 'The U.S. West Coast, and Europe via Germany or Poland.' },
      { id: 'ship-carrier', q: 'Which carriers and shipping methods do you use?', a: 'FedEx.' },
      { id: 'ship-mode', q: 'Are complete bikes shipped by freight or express?', a: 'Both.' },
      { id: 'ship-battery', q: 'Are there separate shipping or dangerous goods restrictions for batteries?', a: 'Batteries ship under their own dangerous goods certificates.' },
      { id: 'ship-rates', q: 'What shipping rates or shipping rules are available?', a: '[Not specified in source]' },
      { id: 'ship-tracking', q: 'Will customers receive tracking information?', a: 'Yes.' },
      { id: 'ship-lost', q: 'What should a customer do if an order is delayed, lost, or marked delivered but never arrived?', a: 'File a claim with the courier or the insurer.' },
      { id: 'ship-damaged', q: 'What must a customer do if the bike or package arrives visibly damaged?', a: 'Take photos and video on receipt. The order can be returned and reshipped.' },
      { id: 'ship-damage-window', q: 'How long does a customer have to report shipping damage?', a: '1–3 days.' },
      { id: 'ship-damage-docs', q: 'What documents are required for a shipping damage claim?', a: 'Photos and video of every damaged part, taken on receipt.' },
      {
        id: 'ship-return-cost',
        q: 'Who bears return shipping costs?',
        a: 'It depends on the reason for the return.',
        list: ['Non-quality return — buyer', 'Defective product — seller', 'Wrong product — seller', 'Shipping damage — seller'],
      },
      { id: 'ship-risk', q: 'When do ownership and risk transfer to the customer?', a: 'Ownership passes to the customer after full payment. Risk transfer: [Not specified in source]' },
      { id: 'ship-badges', q: 'What trust badges and qualifications can be shown to buyers?', a: 'Their names, with the corresponding documents.' },
    ],
  },
  {
    id: 'warranty',
    label: 'Warranty',
    items: [
      {
        id: 'war-coverage',
        q: 'Which products and components are covered, and for how long?',
        a: 'The complete vehicle and its main components carry a 2-year warranty. Wear parts are not covered.',
        list: [
          'Complete vehicle — 2 years',
          'Battery — 2 years',
          'Motor — 2 years',
          'Controller — 2 years',
          'Charger — 2 years',
          'Frame — 2 years',
          'Electronic components — 2 years',
          'Tyres, brakes and wear parts — not covered',
        ],
      },
      { id: 'war-start', q: 'When does the warranty start?', a: 'On the delivery date.' },
      { id: 'war-proof', q: 'Does the warranty require proof of purchase or registration?', a: 'Proof of purchase is required.' },
      { id: 'war-transfer', q: 'Can the warranty be transferred to a subsequent owner?', a: 'No. The warranty stays with the original purchaser.' },
      { id: 'war-defects', q: 'What defects are covered, and does cover include parts, labour, diagnostics and shipping?', a: '[Not specified in source]' },
      { id: 'war-ship', q: 'For an approved warranty repair or replacement, who bears shipping?', a: 'Panquire supplies new parts for the replacement.' },
      { id: 'war-claim', q: 'What is the warranty claim process, and where are claims submitted?', a: 'On the website, or by phone or video call.' },
      { id: 'war-claim-docs', q: 'What documents, photos, serial numbers or diagnostics are required for a claim?', a: '[Not specified in source]' },
      { id: 'war-rma', q: 'Is prior authorisation required before returning a product?', a: 'Yes.' },
      { id: 'war-who', q: 'Who performs warranty repairs?', a: 'An authorised service centre.' },
      { id: 'war-parts', q: 'Are replacement parts new, refurbished or equivalent?', a: 'New.' },
      {
        id: 'war-void',
        q: 'Which events or conditions are not covered by the warranty?',
        a: 'None of the following are covered.',
        list: [
          'Accident or collision',
          'Competition or racing use',
          'Misuse or abuse',
          'Water or moisture damage',
          'Unauthorised modification',
          'Improper assembly',
          'Improper maintenance',
          'Normal wear',
          'Use of incompatible parts or chargers',
        ],
      },
      { id: 'war-wear', q: 'Which parts count as normal wear items?', a: 'Tyres, brake pads and the chain.' },
      { id: 'war-battery', q: 'Is battery capacity decline or reduced range covered?', a: 'Covered within a reasonable range.' },
      { id: 'war-firmware', q: 'Are software or firmware issues covered?', a: 'Yes.' },
      { id: 'war-restart', q: 'Does repair or replacement restart or extend the warranty?', a: 'Replaced parts restart the warranty.' },
      { id: 'war-unrepairable', q: 'What happens if the product cannot be repaired?', a: 'Panquire explains the situation and why the repair is not possible.' },
      { id: 'war-statutory', q: 'Are statutory consumer warranty rights retained?', a: '[Not specified in source]' },
    ],
  },
  {
    id: 'returns',
    label: 'Returns and refunds',
    items: [
      { id: 'ret-window', q: 'What is the return period, and when does it start?', a: '7 days from the delivery date for non-quality returns.' },
      { id: 'ret-eligible', q: 'Which products can be returned?', a: 'Products with a quality issue can be returned within 3 days of receipt.' },
      { id: 'ret-condition', q: 'What condition must the product be in, and must original packaging be kept?', a: 'The original packaging must be retained.' },
      { id: 'ret-fees', q: 'Are restocking, inspection, repackaging or depreciation fees charged?', a: 'No.' },
      { id: 'ret-shipping', q: 'Who bears return shipping?', a: 'The buyer for non-quality returns; Panquire for a defective or wrong product.' },
      { id: 'ret-deposit', q: 'Are deposits or pre-order payments refundable?', a: 'Yes.' },
      { id: 'ret-excluded', q: 'Are custom, clearance, final-sale or used products excluded from returns?', a: 'Quality issues can be returned. Non-quality returns are not accepted for these.' },
      { id: 'ret-process', q: 'What is the return authorisation and submission process?', a: 'Upload photos and video to the website. The return address is sent to the customer separately.' },
      { id: 'ret-inspection', q: 'How are returned products inspected, and how are incomplete or heavily used ones handled?', a: '[Not specified in source]' },
      { id: 'ret-refund', q: 'When and how are refunds issued?', a: '1–3 days.' },
      { id: 'ret-duty', q: 'Are tariffs, import taxes or international shipping refundable?', a: 'No.' },
      { id: 'ret-defective', q: 'How are defective products handled?', a: 'They are destroyed directly.' },
      { id: 'ret-transit', q: 'How are products damaged during return shipping handled?', a: 'The same way as products damaged in outbound shipping.' },
      { id: 'ret-exchange', q: 'Are exchanges offered?', a: 'No. The original product is returned and a new order is placed for the replacement.' },
      { id: 'ret-rights', q: 'What rights apply when a product is defective or not as described?', a: '[Not specified in source]' },
      { id: 'ret-cooling', q: 'What statutory cancellation or cooling-off rights apply in the country of sale?', a: '[Not specified in source]' },
    ],
  },
];
