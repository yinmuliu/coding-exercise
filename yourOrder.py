# https://hushed-stag-1b2.notion.site/Fri-12th-Aug-d06f6caf0d1440548a95a967d52ab7fe

def sort(string):
    # if string is empty, return empty sorted string
    if string == "":
        return ""
    else:
        word_list = string.split(' ')
        sorted_list = string.split(' ')
        # split string into list of words
        for word in word_list:
            # find the number in the word
            num = [int(l) for l in list(word) if l.isdigit()]
            # insert the number into a 'sorted_list' using index
            sorted_list = sorted_list[:(num[0]-1)] + \
                [word] + sorted_list[(num[0]):]

    # convert sorted_list into sorted_string
    return ' '.join(sorted_list)


# sort("is2 Thi1s T4est 3a")
# sort("4of Fo1r pe6ople g3ood th5e the2")
# sort("")

print(sort("is2 Thi1s T4est 3a"))  # "Thi1s is2 3a T4est"
# "Fo1r the2 g3ood 4of th5e pe6ople"
print(sort("4of Fo1r pe6ople g3ood th5e the2"))
print(sort(""))  # ""
