# https://hushed-stag-1b2.notion.site/Mon-15th-Aug-fb13aaed35304b40b1d8fc9218fb085e

# QUESTION 1 OUT OF 2
def split(string):
    list = []
    for i in range(len(string)):
        if (i != 0) and (i % 2 == 0):
            ele = string[(i-2):i]
            list.append(ele)
        if (i == (len(string) - 1)) and (i % 2 == 0):  # c in first case
            ele = string[i:] + '_'
            list.append(ele)
        if (i == (len(string) - 1)) and (i % 2 == 1):  # f in 2nd case
            ele = string[(i-1):]
            list.append(ele)
    return list


print(split('abc'))  # ['ab', 'c_']
print(split('abcdef'))  # ['ab', 'cd', 'ef']
