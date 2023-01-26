import React from "react"

export default function Homepage(props){
   const [selectedQuestions, setSelectedQuestions] = React.useState(0)
   const [chooseDifficulty, setChooseDifficulty] = React.useState("")
   const [selectCategory, setSelectCategory] = React.useState("")
   const [selectType, setSelectType] = React.useState("")

   function handleSelect(e){
      setSelectedQuestions(e.target.value)
      props.setQuestionsAmount(e.target.value)
   }

   function handleDifficulty(e){
      setChooseDifficulty(e.target.value)
      props.setDifficulty(e.target.value)
   }

   function handleCategory(e){
      setSelectCategory(e.target.value)
      props.setCategory(e.target.value)
   }

   function handleType(e){
      setSelectType(e.target.value)
      props.setType(e.target.value)
   }

   return(
        <main>
        <div className="front-page">
        <h1 className="front-header">Quizzical</h1>
        <p className="front-text">Test your intelligence!</p>
        <button onClick={props.handleClick} className="front-btn">Start quiz</button>
        <div className="forms-container">
            <form className="difficulty" action="">
               <label>Select difficulty:</label>
               <select className="select-difficulty" value={chooseDifficulty} onChange={handleDifficulty}>
                     <option value="easy">easy</option>
                     <option value="medium" >medium</option>
                     <option value="hard">hard</option>
               </select>
            </form>
            <form className="questions-amount" action="">
               <label>Select the number of questions:</label>
               <select className="select-questions" value={selectedQuestions} onChange={handleSelect}>
                     <option value={5}>5</option>
                     <option value={10} >10</option>
                     <option value={15}>15</option>
                     <option value={20}>20</option>
                     <option value={50}>50</option>
               </select>
            </form>
            <form className="question-types" action="">
               <label>Select the type of questions:</label>
               <select className="select-questions" value={selectType} onChange={handleType}>
                     <option value="">Any</option>
                     <option value="multiple">Multiple choice</option>
                     <option value="boolean" >True and False</option>
               </select>
            </form>
            <form className="category" action="">
               <label>Select the category:</label>
               <select className="select-category" value={selectCategory} onChange={handleCategory}>
                  <option value="any">Any category</option>
                  <option value="9">General Knowledge</option>
                  <option value="10">Entertainment: Books</option>
                  <option value="11">Entertainment: Film</option>
                  <option value="12">Entertainment: Music</option>
                  <option value="13">Entertainment: Musicals & Theatres</option>
                  <option value="14">Entertainment: Television</option>
                  <option value="15">Entertainment: Video Games</option>
                  <option value="16">Entertainment: Board Games</option>
                  <option value="17">Science & Nature</option>
                  <option value="18">Science: Computers</option>
                  <option value="19">Science: Mathematics</option>
                  <option value="20">Mythology</option>
                  <option value="21">Sports</option>
                  <option value="22">Geography</option>
                  <option value="23">History</option>
                  <option value="24">Politics</option>
                  <option value="25">Art</option>
                  <option value="26">Celebrities</option>
                  <option value="27">Animals</option>
                  <option value="28">Vehicles</option>
                  <option value="29">Entertainment: Comics</option>
                  <option value="30">Science: Gadgets</option>
                  <option value="31">Entertainment: Japanese Anime & Manga</option>
                  <option value="32">Entertainment: Cartoon & Animations</option>
               </select>
            </form>
        </div>
        
        
        </div>
        </main>
   ) 
}