/* eslint-disable react/prop-types */
import "./../../src/index.css";
import GenericPdfDownloader from "./DownloadPdf";


import sorterDepartment from "./utilities/sorterDepartment";
import getUniShorterName from "./utilities/getUniShorterName";
import { generateLogo } from './utilities/generateLogo';
import { pages } from './utilities/pages';


export const CoverPage = ({ item, pageId }) => {
  const { courseCode, studentId } = item;
  const zipCode = parseInt(item.varsityName.split("-")[1]);
  const logo = generateLogo(zipCode);

  // get sorter dept name:
  const studentSortDeptName = sorterDepartment(item.studentDepartment);
  const teacherSortDeptName = sorterDepartment(item.teacherDepartment);

  // get university short name:
  const uniShortName = getUniShorterName(item.varsityName);

  // render the page based on user clicked:
  const renderPage = (id) => {
    const SelectedPage = pages[id];
    if (SelectedPage) {
      return (
        <SelectedPage
          item={item}
          logo={logo}
          studentSortDeptName={studentSortDeptName}
          teacherSortDeptName={teacherSortDeptName}
          uniShortName={uniShortName}
        />
      );
    } else {
      return <h2>Page not found</h2>;
    }
  };

  return (
    <section className="mx-auto px-4 container relative">
      <div className="flex justify-center">
        <div id="testId" className="cover_page_wrapper shadow-2xl bg-white mb-12">
          {renderPage(pageId + 1)}
        </div>

      </div>
        {courseCode !== undefined && (
          <GenericPdfDownloader
            downloadFileName={`${studentId}`}
            rootElementId="testId"
          />
        )}
    </section>
  );
};
