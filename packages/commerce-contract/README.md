# A-Tap commerce contract

`@ebanux/commerce-contract` is the versioned, framework-neutral wire contract shared by the A-Tap commerce backend and storefront.

It owns JSON-safe request and response schemas, structured error codes, public and merchant DTOs, and catalog URL codecs. It does not own persistence records, Stripe objects, React state, routing, or framework integrations.

All monetary amounts use integer minor units. API consumers must reject unsupported `contractVersion` values.
