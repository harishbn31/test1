import React, { useState } from 'react';
import './App.css';
import ScatterPlot from './ScatterPlot';

function App() {
	const data = [
		{contry: 'India',population: 2229, density: 87, year: 1950, rate: 2.5,  },
		{contry: 'India',population: 2858 , density: 114  , year: 1960, rate: 4.5 },
		{contry: 'India',population: 3237 , density: 104 , year: 1970, rate: 6.5 },
		{contry: 'India',population: 3009 , density: 151 , year: 1980, rate: 6 },
		{contry: 'India',population: 4050 , density: 138  , year: 1990, rate: 6.5 },
		{contry: 'Russia',population: 1711 , density: 62  , year: 1950, rate: 3.5 },
		{contry: 'Russia',population: 2001 , density: 69  , year: 1960, rate: 4 },
		{contry: 'Russia',population: 2500 , density: 78  , year: 1970, rate: 4.5 },
		{contry: 'Russia',population: 3100 , density: 84  , year: 1980, rate: 5 },
		{contry: 'Russia',population: 3500 , density: 95  , year: 1990, rate: 5.6 },
		{contry: 'German',population: 1711 , density: 46  , year: 1950, rate: 2.3 },
		{contry: 'German',population: 1911 , density: 56  , year: 1960, rate: 2.6 },
		{contry: 'German',population: 1011 , density: 66  , year: 1970, rate: 2.4 },
		{contry: 'German',population: 1111 , density: 78  , year: 1980, rate: 2.5 },
		{contry: 'German',population: 1200 , density: 86  , year: 1990, rate: 3 },
	]
  const [selectedYear, setSelectedYear] = useState('')
	const processData = (csv) => {
		const allTextLines = csv.split(/\r\n|\n/);
		const lines = allTextLines.map((data) => {
			const m = data.replaceAll('^"|"$', '');
			return { year: m.split(',')[1], rate: m.split(',')[5] };
		});
		console.log('lines', lines)
		// setData(lines);
	};
	const fileReadingFinished = (event) => {
		const  csv = event.target.result;
		processData(csv);
	};
	const getAsText = (fileToRead) => {
		const  reader = new FileReader();
		// Read file into memory as UTF-8
		reader.readAsText(fileToRead);
		// Handle errors load
		reader.onload = fileReadingFinished;
		reader.onerror = errorHandler;
	};
	const handleFiles = (e) => {
		// Check for the various File API support.
		if (window.FileReader) {
			// FileReader are supported.
			//   let reader = new FileReader();
			//   reader.onload = function(e) {
			//     console.log('check999',  reader.result)
			//     setData({file: reader.result})
			// }
			// reader.readAsDataURL(e.target.files[0]);
			getAsText(e.target.files[0]);
		}
	};
	const errorHandler = (event) => {
		if (event.target.error.name === 'NotReadableError') {
			alert('Cannot read file!');
		}
	};
  const handleChange = (e) =>{
    setSelectedYear(e.target.value)
  }
	return (
		<div className='container'>
      <div className='navBar'>
			  <p>ABC</p> 
        <p>  CO</p>
      </div>
	  <div className='dropdown'>
      <select style={{width: '8vw'}} value={selectedYear} onChange={handleChange}>
        {data.map((e) => {
          return <option value={e.year}>{e.year}</option>
        })}
      </select>
	  </div>
	  {/* <div className='overall'>
	  <LineChart data={data} />
	  </div> */}
	  <div className='svgContainer'>
	  <ScatterPlot data={data} />
	  </div>
			<input 
                type="file" 
                onChange={ handleFiles }
                accept=".csv" 
				hidden
            />
			{/* <BarChart data={data} /> */}
		</div>
	);
}

export default App;