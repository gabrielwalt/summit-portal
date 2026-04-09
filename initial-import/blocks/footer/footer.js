import { getMetadata } from '../../scripts/aem.js';

export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const resp = await fetch(`${footerPath}.plain.html`);
  if (resp.ok) {
    const html = await resp.text();
    block.innerHTML = html;
  }
}
