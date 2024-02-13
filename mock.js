# mock_interview

/*
 Given an array of sentences making up a body of text,
 output a concordance of words that appear in the text.
 If the same word appears multiple times on a line it should
 list the line only once.
*/
function concordance(data) {
  if(!Array.isArray(data))
    return false;
  const map = new Map();
  const set = new Set();
  for(let index=0;index<data.length;index++)
    {
      const words = data[index]

      for(let index1=0;index1<words.length;index1++)
        {
          if(words[index1].trim().length>0)
          set.add(words[index1])
        }
    }
  
  for(let word of set)
    {
      for(let index=0;index<data.length;index++)
      if(data[index].toLowerCase().split(/[\s.,';]/)
      .includes(word.toLowerCase()))
        {
          if(!map.has(word.toLowerCase()))
          {
            map.set(word.toLowerCase(),[]);
          }
          const value = map.get(word.toLowerCase());
          if(!(value.indexOf(index)>=0))
            value.push(index);
           map.set(word.toLowerCase(),value);
        }
    }
  
  console.log(Object.fromEntries(map.entries()));
  return Object.fromEntries(map.entries());
}

module.exports = concordance;




/*
  Given:
    a linked list of words
    a concordance
    the original data set
  Return:  
    an array of all sentences containing words in the list
*/
function searchLines(words, concordance, data) {
  if(words.length===0)
    return [];
  const map = new Map();
  for(let key in concordance)
    {
      map.set(key,concordance[key]);
    }
  //const map = new Map(concordance);
  const set = new Set();
  for(let [key,value] of map.entries())
    {
      let node = words.head;
      while(node)
        {
          console.log("word"+node.value);
                            console.log(key);
          if(node.value === key)
            {
             for(let index=0;index<value.length;index++)
                set.add(data[value[index]]);
            }
          
          node = node.next;
        }
     
    }
  return [...set];
}
module.exports = searchLines;
const obj = {};
map {
  
}
[
all : [1,5,9]
]
array.indexOf()
array.includes()
