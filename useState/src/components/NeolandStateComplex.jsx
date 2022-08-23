import { useState } from "react";


export const NeolandStateComplex = () => {

  const [heroInfo, setHeroInfo] = useState({
    name: 'Peter',
    lastName: 'Parker',
    job: 'Photographer'
  })


  const handleInputNameChange = (e) => {
    console.log('Render Name');
    setHeroInfo({
      ...heroInfo,
      name: e.target.value
    })
  }

  const handleInputLastNameChange = (e) => {
    console.log('Render LastName');
    setHeroInfo({
      ...heroInfo,
      lastName: e.target.value
    })
  }

  const handleInputJobChange = (e) => {
    console.log('Render Job');
    setHeroInfo({
      ...heroInfo,
      job: e.target.value
    })
  }

  return (<>
    <h1>{heroInfo.name + ' ' + heroInfo.lastName}</h1>
    <h2>{heroInfo.job}</h2>
    <label htmlFor="name">
      Name:
      <input type="text" name="name" value={heroInfo.name} onChange={
        (e) => { handleInputNameChange(e) }
      } />
    </label>
    <label htmlFor="lastName">
      Surname:
      <input type="text" name="lastName" value={heroInfo.lastName} onChange={
        (e) => { handleInputLastNameChange(e) }
      } />
    </label>
    <label htmlFor="job">
      Job:
      <input type="text" name="job" value={heroInfo.job} onChange={
        (e) => { handleInputJobChange(e) }
      } />
    </label>



  </>)
}