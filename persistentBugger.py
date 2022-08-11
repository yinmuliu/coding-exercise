# https://hushed-stag-1b2.notion.site/Thurs-11th-Aug-2e7ae45676bf488989a5da453b54cca4

def persistence(num, counter=0):
    if num <= 0:
        return "input needs to be a positive number."
    if num < 10:
        return counter
    else:
        # turn number into a string
        num_str = str(num)
        # multiply all the number in the string
        result_num = 1
        for s in num_str:
            result_num *= int(s)
        # increment counter
        counter += 1
        # test if the result_num < 10
        if result_num < 10:
            # if so, return counter
            return counter
        else:
            # if not, continue checking
            return persistence(result_num, counter)


print(persistence(39))  # 3
print(persistence(999))  # 4
print(persistence(4))  # 0
