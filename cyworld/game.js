const startWord = () => {
	let inputWord = document.getElementById("wordchain_input_box").value
	let currentWord = document.getElementById("wordchain_current_word").innerText
	
	let lastWord = currentWord[currentWord.length - 1];
	let firstWord = inputWord[0];

	if (lastWord === firstWord)
	{
		document.getElementById("wordchain_result").innerText = "정답입니다!"
		document.getElementById("wordchain_current_word").innerText = inputWord;
		document.getElementById("wordchain_input_box").value = "";
	}
	else
	{
		document.getElementById("wordchain_result").innerText = "땡!"
		document.getElementById("wordchain_input_box").value = "";
		
	}.
}