import dayjs from "dayjs";
import { merge } from "lodash";
export function genDate() {
  return dayjs().format("yyyyMMdd_hh_mm_ss");
}

interface GenReleaseNameOptions {
  name: string;
  hasDate: string;
}
export function genReleaseName(options?: GenReleaseNameOptions) {
  const { name } = merge({ name: "" }, options);
  const date = genDate();
  const releaseName = `${name}_release_${date}`;
  return releaseName;
}
