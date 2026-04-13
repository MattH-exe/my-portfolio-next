"use client";
import SiteHeader from "../../../../components/SiteHeader";
import Footer from "../../../../components/Footer";
import CaseStudyLayout from "../../../../components/CaseStudyLayout";
import { GLOBAL_STYLES } from "../../../../components/Styles";
import { CASE_STUDIES } from "../../../../data/projects";

export default function PBLPage() {
  return (
    <>
      <style>{GLOBAL_STYLES}</style>
      <SiteHeader showTicker={false} />
      <CaseStudyLayout study={CASE_STUDIES.pbl} backHref="/work/puckboard" backLabel="Back to Puckboard" />
      <Footer />
    </>
  );
}
