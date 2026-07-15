## Update TeamsBenefits items

Update the `items` array in `src/components/yovu/teams/TeamsBenefits.tsx` so the second and third entries match the kicker + headline + body copy style used by the first entry.

**Item 2 (Mobility)**
- kicker: `MOBILITY`
- title: `Work from anywhere, on any device`
- copy: `Install Teams on any PC, Mac, or mobile device to keep your team connected on the go. Stay fully accessible and responsive no matter where your workday takes you.`

**Item 3 (Security)**
- kicker: `SECURITY`
- title: `Protect your data with built-in security`
- copy: `Enjoy enterprise-grade, end-to-end encryption for all your signaling and media. You maintain complete administrative control, including the ability to revoke Microsoft 365 tenant access securely at any time.`

No component/markup changes — the existing render already handles the optional `kicker` field.