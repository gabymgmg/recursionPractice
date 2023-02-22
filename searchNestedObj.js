const animals = [
    { id: 1,
      type: 'cat',
      pets: [
        { id: 1,
          name: 'Toby',
          breed: 'Tabby'
        }, 
        { id: 2,
          name: 'Golden Girl',
          breed: 'Russian Blue'
        }
      ]  
    },
    { id: 2,
      type: 'dog',
      pets: [
        { id: 3,
          name: 'Goldilocks',
          breed: 'Poodle'
        }
      ]
    },
    { id: 3,
      type: 'fish',
      pets: [
        { id: 4,
          name: 'Marigold',
          breed: 'Goldfish'
        }
      ]
    }
  ]

  const searchTerm = "gold"
let result = []

function getEachItem(object) {
  object.forEach(item => {
    searchItem(item)
  })
  let uniqueResults = [...new Set(result)]
  return uniqueResults.length
};

function searchItem(item) {
  Object.keys(item).forEach(key => {
    if (typeof item[key] === "object") {
      searchItem(item[key])
    }
    if (typeof item[key] === "string") {
      let searchAsRegEx = new RegExp(searchTerm, "gi");
      if (item[key].match(searchAsRegEx)) {
        result.push(item.id)
      }
    }
  })
}

console.log(getEachItem(animals))
