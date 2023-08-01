import { ISectionedKpi } from "../types";

const base: ISectionedKpi = {
  title: "Operación gravada (18%)",
  sections: [
    { label: "Gravado", PEN: 30 },
    { label: "IGV", PEN: 30 },
  ],
};

const loading: ISectionedKpi = {
  title: "Operación gravada (18%)",
  sections: [
    { label: "Gravado", PEN: 30 },
    { label: "IGV", PEN: 30 },
  ],
  loading: true,
};

export const mockSectionedKpiProps = {
  base,
  loading,
};
