"use client";
import SiteHeader from "../../../../components/SiteHeader";
import Footer from "../../../../components/Footer";
import CaseStudyLayout from "../../../../components/CaseStudyLayout";
import { GLOBAL_STYLES } from "../../../../components/Styles";
import { CASE_STUDIES } from "../../../../data/projects";

export default function MyDocsPage() {
  return (
    <>
      <style>{GLOBAL_STYLES}</style>
      <SiteHeader showTicker={false} />
      <CaseStudyLayout study={CASE_STUDIES.mydocs} backHref="/work/puckboard" backLabel="Back to Puckboard" />
      <Footer />
    </>
  );
}
