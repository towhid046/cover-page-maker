/* eslint-disable react/prop-types */
import '../../../../src/index.css';

import GroupPage1 from "./../../../pages/GroupPage/GroupPage1/GroupPage1";
import GenericPdfDownloader from './../../DownloadPdf';
import sorterDepartment from './../../utilities/sorterDepartment';
import getUniShorterName from './../../utilities/getUniShorterName';
import { generateLogo } from './../../utilities/generateLogo';
import { pages } from './../../utilities/pages';

const GroupCoverPage = ({ item }) => {
  const { courseCode, groupNumber } = item;
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
        <div
          id="testId2"
          className="cover_page_wrapper shadow-2xl bg-white mb-12"
        >
          {/* {renderPage(pageId + 1)} */}
          <GroupPage1
            item={item}
            logo={logo}
            studentSortDeptName={studentSortDeptName}
            teacherSortDeptName={teacherSortDeptName}
            uniShortName={uniShortName}
          />
        </div>
      </div>
      {courseCode !== undefined && (
        <GenericPdfDownloader
          downloadFileName={`Group_${groupNumber}`}
          rootElementId="testId2"
        />
      )}
    </section>
  );
};
export default GroupCoverPage;
