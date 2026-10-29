// Static foundation metadata only. This module has no engine or execution ports.
export const ENGINE_REPOSITORIES = Object.freeze({
  E01: 'Identity-Authorization-and-Policy-Engine',
  E02: 'Secure-Intake-Case-Workflow-Engine',
  E03: 'Correspondence-and-Outreach-Engine',
  E04: 'Discovery-and-Acquisition-Engine',
  E05: 'Evidence-Storage-and-Provenance-Engine',
  E06: 'Document-and-Media-Processing-Engine',
  E07: 'Knowledge-and-verification-engine',
  E08: 'Factual-investigation-engine',
  E09: 'Editorial-and-story-development-engine',
  E10: 'Media-production-engine',
  E11: 'Consent-rights-and-use-decisions-engine',
  E12: 'Packaging-release-and-correction-engine',
  E13: 'Resources-and-commercial-operations-engine',
  E14: 'Visual-workspace-and-audit-engine',
});

const EFFECTS = ['executeTasks', 'investigate', 'fileClaims', 'sendMessages', 'publish', 'spend', 'deploy'];

function exact(value, keys) {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    throw new TypeError('Expected a JSON object');
  }
  const actual = Object.keys(value).sort();
  const expected = [...keys].sort();
  if (actual.length !== expected.length || actual.some((key, i) => key !== expected[i])) {
    throw new TypeError('Unexpected or missing metadata fields');
  }
}

export function validateFoundationManifest(value) {
  // Input must be JSON data. This is not an authentication or authorization API.
  exact(value, ['schemaVersion', 'repository', 'stage', 'operationalHold', 'effects', 'engines']);
  if (value.schemaVersion !== 1 || value.repository !== 'neophilism/Public-Accountability-Machine'
      || value.stage !== 'foundation-only' || value.operationalHold !== true) {
    throw new TypeError('Foundation identity or stopping boundary changed');
  }
  exact(value.effects, EFFECTS);
  if (EFFECTS.some((effect) => value.effects[effect] !== false)) {
    throw new TypeError('Foundation metadata cannot enable operational effects');
  }
  if (!Array.isArray(value.engines) || value.engines.length !== Object.keys(ENGINE_REPOSITORIES).length) {
    throw new TypeError('Every independent upstream engine must be recorded');
  }
  const seen = new Set();
  for (const entry of value.engines) {
    exact(entry, ['id', 'repository', 'integrationStatus', 'qualification']);
    if (typeof entry.id !== 'string' || !Object.hasOwn(ENGINE_REPOSITORIES, entry.id) || seen.has(entry.id)) {
      throw new TypeError('Unknown or duplicate upstream engine');
    }
    if (entry.repository !== `neophilism/${ENGINE_REPOSITORIES[entry.id]}`
        || entry.integrationStatus !== 'not_connected' || entry.qualification !== 'not_verified') {
      throw new TypeError('Foundation inventory cannot claim an integration or qualification');
    }
    seen.add(entry.id);
  }
}
