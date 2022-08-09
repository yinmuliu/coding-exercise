# https://hushed-stag-1b2.notion.site/Tues-9th-Aug-1497074be2d744e9bf92d0961dff0310

def spinWords(string):
    # Turn string into a list of word, separate using space
    li = list(string.split(" "))
    new_li = []
    # Find word in the list that has 5 letters
    for word in li:
        if len(word) >= 5:
            # Reverse that word
            new_word = word[::-1]
            # append the new word to the new list
            new_li.append(new_word)
        else:
            # for other words, append them directly to the new list
            new_li.append(word)
    # return a string
    return " ".join(new_li)


spinWords("Hey fellow warriors")  # returns "Hey wollef sroirraw"
spinWords("This is a test")  # returns "This is a test"
spinWords("This is another test")  # returns "This is rehtona test"
