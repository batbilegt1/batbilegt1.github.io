import profile from '@/data/profile.json';
import {
  AGE_PRECISION_FULL,
  AGE_PRECISION_STATIC,
  ageAt,
  utcDate,
} from '@/lib/telemetry';

import LiveAge from './LiveAge';
import Table from './Table';
import type { StatRow } from './TableRow';

/**
 * The personal stats table stays server-rendered. Only its age value is a
 * client leaf, so no-JavaScript readers receive a real, dated snapshot.
 */
export default function PersonalStats() {
  const renderedAt = Date.now();
  const data: StatRow[] = [];

  if (profile.birthDate) {
    data.push({
      label: 'Current age',
      value: (
        <LiveAge
          initial={ageAt(renderedAt, AGE_PRECISION_STATIC)}
          note={`as of ${utcDate(renderedAt)}`}
          precision={AGE_PRECISION_FULL}
        />
      ),
    });
  }
  if (profile.countriesVisited) {
    data.push({
      label: 'Countries visited',
      value: String(profile.countriesVisited),
    });
  }
  data.push({ label: 'Current city', value: profile.currentCity });

  return <Table data={data} />;
}
