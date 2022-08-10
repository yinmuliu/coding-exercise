# https://hushed-stag-1b2.notion.site/Wed-10th-Aug-45bba8a35cf4490bb3559783a6b68755

def scramble(str1, str2):
    # count the occurance of each character in str2
    # record the count in a dict
    # loop the character in str2
    # subtract the count from the dict
    # if all keys have a zero or less-than-zero count, then it is a match
    # is_match = False
    # count = {}
    # for c in str2:
    #     if c in count.keys():
    #         count[c] += 1
    #     else:
    #         count[c] = 1

    # for c in str1:
    #     if c in count.keys():
    #         count[c] -= 1

    # is_match = all(v <= 0 for v in count.values())

    # return is_match

    # A more briefly written solution:
    # use set() and count() for string
    # print(set(str2))
    # for c in set(str2):
    #     if str1.count(c) < str2.count(c):
    #         return False
    # return True

    # Even more brief:
    return all(str1.count(c) >= str2.count(c) for c in str2)


print(scramble('rkqodlw', 'world'))  # == > True
print(scramble('pedeyatahossoqqnt', 'python'))  # == > True
print(scramble('katas', 'steak'))  # == > False

# Without For Loops?


# def scramble_without_forloop(str1, str2):
