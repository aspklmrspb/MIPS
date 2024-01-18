import React, { useEffect } from 'react';

export default function Instructions() {
    return (
        <div style={{padding : '10px'}}>
            <h1 style={{paddingBottom:'10px', fontWeight:'bold',fontSize:'16px !important'}}>CMS Quality Benchmarks</h1>
            <p style={{paddingBottom : '10px'}}>When a clinician submits measures for the MIPS Quality Performance Category, each measure is assessed against its benchmarks to determine how many points the measure earns. A clinician can receive anywhere from 3 to 10 points for each measure (not including any bonus points). Each benchmark is presented in terms of deciles. Points will be awarded within each decile.</p>
            <p style={{paddingBottom : '10px'}}>For measures with no historic benchmark, MIPS will attempt to calculate same-year benchmarks based on this year’s performance data. Benchmarks are created if there are at least 20 reporting clinicians or groups that meet the criteria for contributing to the benchmark, including meeting the minimum case size (which is generally 20 patients), meeting the data completeness criteria (which is 75 percent), and having performance greater than 0 percent (less than 100 percent for inverse measures). If no historic benchmark exists and no benchmark can be calculated, then the measure will receive 3 points if it meets data completeness requirements. If the measure does not meet data completeness requirements, it will receive 1 point (unless the TIN or TIN/NPI is considered rural/small practice in which case the minimum is 3 points).</p>
            <h2 style={{paddingBottom : '5px'}}>Resources:</h2>
            <div style={{marginBottom:'0px', fontWeight:'bold',fontSize:'1rem !important'}}>
                <ul className="myul-style" style={{marginBottom:'0px',marginLeft:'30px'}}>
                    <li><a href="https://nrdr.acr.org/pqrs/pdf/CMS%20QPP%20Benchmarks%20V2_Remediated.pdf" rel="noopener noreferrer" target="_blank" style={{textDecoration:'underline'}}>Quality Measure Benchmarks Overview</a></li>
                    <li><a href="https://nrdr.acr.org/pqrs/pdf/2022 MIPS Historical Quality Benchmarks.xlsx"  target="_blank" style={{textDecoration:'underline'}}>MIPS Benchmark Results</a></li>
                </ul>
            </div>
        </div>
    )
};