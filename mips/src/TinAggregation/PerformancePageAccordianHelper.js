import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionSummary, AccordionDetails } from '../helpers/CustomStyledComponent/AccordianStyled';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { fetchPerformanceReportData } from '../API/PerformanceReportAPI';

const PerformaceReportHeaders = [
  { name: "", title: "" },
  { name: "Initial Patient Population", title: "Initial Patient Population : This field includes number of patients at the physician practice who are relevant for this measure, or the “set” of patients to be evaluated for the measure. (For DIR measures and the extravasation measure, this is calculated at the level of the facility and attributed to all physicians at the facility.) This value is based on the information the physician entered the CMS submission tab. If you indicate that 100% of exams were submitted to the registry, the number of records that we received will be used as the reporting denominator. Otherwise, if you enter a number other than the number of records that we received, that number will be used for this field." },
  { name: "Performance Denominator", title: "Performance Denominator : This field includes the reporting numerator with any denominator exclusions or denominator exceptions subtracted." },
  { name: "Performance Numerator", title: "Performance Numerator : This field includes the number of records where a performance measure was met, or the calculated performance score for measures that are medians or means (for example, turnaround time or median dose index value)." },
  { name: "Performance Not Met", title: "Performance Not Met : This field includes the number of records that do not meet the numerator requirements. Note: the field will be blank for turnaround time measures and median dose index measures." },
  { name: "Performance Rate", title: "Performance Rate : This field calculates the Performance numerator / Performance denominator. Note: if submitting DIR and/or GRID measures the field will be blank." },
  { name: "", title: "" },
  { name: "Denominator Exclusions", title: "Denominator Exclusions : This field includes records that are excluded from measure performance rate calculation either before considering if numerator criteria were met, e.g. removed from denominator population (exclusions) or because the numerator criteria cannot be met as indicated in measure specifications. For example, GRID exams with very high and very low turnaround times are excluded because these values are within the top or bottom 2.5% of records submitted by the physician. An example of exclusion is the CT colonography exam measure (ACRad1) where a record is excluded because there were no positive exam findings. Note: your performance report will only show exclusions." },
  { name: "Denominator Exception", title: "Denominator Exception : This field includes records that are excluded from measure performance rate calculation either before considering if numerator criteria were met, e.g. removed from denominator population (exclusions) or because the numerator criteria cannot be met as indicated in measure specifications (exceptions). For example, GRID exams with very high and very low turnaround times are excluded because these values are within the top or bottom 2.5% of records submitted by the physician. An example of exclusion is the CT colonography exam measure (ACRad1) where a record is excluded because there were no positive exam findings. Note: your performance report will only show exceptions." },
  { name: "Reporting Denominator", title: "Reporting Denominator : The reporting denominator is considered the number of “eligible instances” that the measure could be reported. It may equal the initial patient population if there are no denominator exclusions." },
  { name: "Reporting Numerator", title: "Reporting Numerator : This field includes the total number of exams submitted with complete numerator information." },
  { name: "Reporting Rate", title: "Reporting Rate : This field calculates the reporting numerator / reporting denominator, based on number of exams submitted to us and number of exams that you indicated were performed. This rate needs to be at least 75% for successful participation. If you need to change your reporting rate, do so in the CMS submission tab." },
  { name: "Decile", title: "Decile" },
  { name: "Selected for CMS Submission", title: "Selected for CMS Submission : This field indicates if a physician selected “Yes or No” to include this measure for MIPS reporting to CMS. To make changes to the measures identified please update in the CMS Submission tab by checking the box next to each measure." }
]

export default function PerformancePageAccoridanHelper(props) {
  const [expanded, setExpanded] = React.useState('');
  const [performanceData, setPerformanceData] = React.useState({
    PTinData : [],
        NPIData : [],
        CTinData : []
  });

  const handleChange = (tin) => async (event, newExpanded) => {
    setExpanded(newExpanded ? tin : false);
    if (newExpanded) {
      debugger;
      var response = await fetchPerformanceReportData(tin,props.npi, props.userName, props.userRole, props.selectedyear);
      setPerformanceData({...performanceData , PTinData : response.PTinData, NPIData :  response.NPIData, CTinData : response.CTinData});

    }
  };

  return (
    <div style={{ margin: '0px -10px' }}>
      <Accordion expanded={expanded === props.dataRow.tin} onChange={handleChange(props.dataRow.tin)} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="div">{props.dataRow.tin}&nbsp;{props.dataRow.status}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '5px 0px' }}>
          <div className="DivNote">
            <p>
              <strong>NOTE:</strong>
              <br />
              Decile values below are preliminary and shown only as an indication of potential CMS scoring. Minimum point score is 1 and does not consider small/rural status.
              <br />
              The quality category score is preliminary and may not take into account the reweighting of the promoting interoperability category for non-patient-facing clinicians that are exempt.
            </p>
          </div>


          {
            performanceData.PTinData !== undefined && performanceData.PTinData.length != 0
            &&
            <>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={14} style={{ background: '#C4D79B', marginTop: '5px', color: '#000', fontWeight: 'bold', padding: '2px 5px', textAlign: 'center' }}>
                        Propotional Measure
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      performanceData.PTinData.map((row, index) => {
                        return <>
                          <TableRow>
                            <TableCell
                              colSpan={14}
                              style={{ background: '#D1DFE2', color: '#000', fontWeight: 'bold',padding: '5px' }}
                              title='This field displays a qualified measure number that is supported by the ACR Qualified Clinical Data Registry in the current program year, including both MIPS (i.e. 145, 146, etc.) and non-MIPS measures (ACRad 1 – ACRad 24).'
                            >
                              - Measure : {row["mesNum"]} &nbsp;
                              <span>{row["mesTitle"]}</span>&nbsp;&nbsp;
                              <span>Domain : {row["domainDescription"]}</span>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            {
                              PerformaceReportHeaders.map((Hrow) => {
                                return <TableCell
                                  title={Hrow.title}
                                  style={{ padding: '5px', border: '1px solid #ddd', textAlign: 'center', color: '#000', fontWeight: 'bold' }}
                                >{Hrow.name}</TableCell>
                              })
                            }
                          </TableRow>
                          <TableRow key={`${index}`} style={{ background: '#f2f2f2' }}>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666', fontWeight: 'bold' }}>Group</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{row["initial_Patient_Population"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{row["perf_Denom"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{row["performance_Numerator"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{row["performance_NotMet"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{row["performance_Rate"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', background: '#ddd' }}></TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{row["denom_Exclusions"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{row["denom_Exception"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{row["reporting_Denominator"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{row["reporting_Numerator"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{row["reporting_Rate"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{row["decile_Val"] === "0 Points" ? row["decile_Val"] + "Insufficient Reporting Data" : row["decile_Val"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{row["selectedForCmsSubmission"]}</TableCell>
                          </TableRow>

                          {
                            performanceData.NPIData.map((npirow, index) => {
                              return <>{
                                row.examTin === npirow.examTin && npirow.mesNum === row.mesNum
                                &&
                                <TableRow>
                                  <TableCell style={{ textAlign: 'center', padding: '10px', fontWeight: 'bold' }}>{npirow.physicianName}<br />{npirow.npi}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{npirow.initial_Patient_Population}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{npirow.perf_Denom}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{npirow.performance_Numerator}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{npirow.performance_NotMet}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{npirow.performance_Rate}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px', background: '#ddd' }}></TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{npirow.denom_Exclusions}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{npirow.denom_Exception}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{npirow.reporting_Denominator}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{npirow.reporting_Numerator}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{npirow.reporting_Rate}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{npirow["decile_Val"] === "0 Points" ? npirow["decile_Val"] + "Insufficient Reporting Data" : npirow["decile_Val"]}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{npirow.selectedForCmsSubmission}</TableCell>
                                </TableRow>
                              }
                              </>
                            })
                          }
                        </>
                      })
                    }
                  </TableBody>
                </Table>
              </TableContainer>

            </>
          }
          {
            performanceData.CTinData !== undefined && performanceData.CTinData.length != 0
            &&
            <>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={14} style={{ background: '#C4D79B', marginTop: '5px', color: '#000', fontWeight: 'bold', padding: '2px 5px', textAlign: 'center' }}>
                        Continuous Measure
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      performanceData.CTinData.map((Crow, index) => {
                        return <>
                          <TableRow>
                            <TableCell
                              colSpan={14}
                              style={{ background: '#D1DFE2', color: '#000', fontWeight: 'bold',padding: '5px' }}
                              title='This field displays a qualified measure number that is supported by the ACR Qualified Clinical Data Registry in the current program year, including both MIPS (i.e. 145, 146, etc.) and non-MIPS measures (ACRad 1 – ACRad 24).'
                            >
                              - Measure : {Crow["mesNum"]} &nbsp;
                              <span>{Crow["mesTitle"]}</span>&nbsp;&nbsp;
                              <span>Domain : {Crow["domainDescription"]}</span>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            {
                              PerformaceReportHeaders.map((CHrow) => {
                                return <TableCell
                                  title={CHrow.title}
                                  style={{ padding: '5px', border: '1px solid #ddd', textAlign: 'center', color: '#000', fontWeight: 'bold' }}
                                >{CHrow.name}</TableCell>
                              })
                            }
                          </TableRow>
                          <TableRow key={`${index}`} style={{ background: '#f2f2f2' }}>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666', fontWeight: 'bold' }}>Group</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{Crow["initial_Patient_Population"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{Crow["perf_Denom"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{Crow["performance_Numerator"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{Crow["performance_NotMet"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{Crow["performance_Rate"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', background: '#ddd' }}></TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{Crow["denom_Exclusions"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{Crow["denom_Exception"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{Crow["reporting_Denominator"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{Crow["reporting_Numerator"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{Crow["reporting_Rate"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{Crow["decile_Val"] === "0 Points" ? Crow["decile_Val"] + "Insufficient Reporting Data" : Crow["decile_Val"]}</TableCell>
                            <TableCell style={{ textAlign: 'center', padding: '10px', color: '#666666' }}>{Crow["selectedForCmsSubmission"]}</TableCell>
                          </TableRow>

                          {
                            performanceData.NPIData.map((Cnpirow, index) => {
                              return <>{
                                Crow.examTin === Cnpirow.examTin && Cnpirow.mesNum === Crow.mesNum
                                &&
                                <TableRow>
                                  <TableCell style={{ textAlign: 'center', padding: '10px', fontWeight: 'bold' }}>{Cnpirow.physicianName}<br />{Cnpirow.npi}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{Cnpirow.initial_Patient_Population}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{Cnpirow.perf_Denom}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{Cnpirow.performance_Numerator}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{Cnpirow.performance_NotMet}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{Cnpirow.performance_Rate}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px', background: '#ddd' }}></TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{Cnpirow.denom_Exclusions}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{Cnpirow.denom_Exception}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{Cnpirow.reporting_Denominator}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{Cnpirow.reporting_Numerator}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{Cnpirow.reporting_Rate}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{Cnpirow["decile_Val"] === "0 Points" ? Cnpirow["decile_Val"] + "Insufficient Reporting Data" : Cnpirow["decile_Val"]}</TableCell>
                                  <TableCell style={{ textAlign: 'center', padding: '10px' }}>{Cnpirow.selectedForCmsSubmission}</TableCell>
                                </TableRow>
                              }
                              </>
                            })
                          }
                        </>
                      })
                    }
                  </TableBody>
                </Table>
              </TableContainer>

            </>
          }

          {
             performanceData.PTinData === undefined && performanceData.PTinData === undefined
             &&
             <div>No Measures Found</div>
          }
        </AccordionDetails>
      </Accordion>
    </div>
  );
}