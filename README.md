# readmeCTF spring 2021

This is the repository for a Jeopardy-style CTF with web, steganography and reverse-engineering challenges that was hidden in a CTF article written for the 2nd edition of the student magazine "readme", spring 2020.

There are four challenges in total, a web-based challenge, a steganography challenge, as well as a reverse-engineering challenge. The last challenge is a riddle, requiring sleuth in order to identify how to access the last flag.

[Link to deployment](https://readme-ctf-v2021.web.app)

Using create-react-app and Firebase for deployment and function-based API.

# Write-up

## 1. Admin
This challenge is hidden in the menu, requring use of browser developer tools in order to read the console log and to see which cookies are set. Are you able to log in as an admin user by finding the weak password? The challenge can also be solved by scanning the code of the webpage.

## 2. Zipper image
This is an image of a zipper. The key to this challenge is to realize that the file may not _only_ be an image, but perhaps also contains another hidden file? Are you able to unzip the mystery?

## 3. Bingo
This is a bingo board, which contains some hidden codes. The key to this challenge is to realize that the bingo board is merely a facade, and that for each 6th cell selected, a code is sent to a backend API (firebase function). The bingo-board consists of hexadecimal ASCII codes, which can be converted to latin letters. There is a hint on the page which indicates the correct sequence of characters to unlock the flag, which is then returned and printed to the console.

## 4. Timeout
This is a riddle and a trick question. The key to this challenge is to realize that your browser history has been hijacked, and that pressing "back" in the browser does nothing. After pressing the back-button five times, a new "error" will be displayed, which must be decrypted by finding the super secret hidden encryption algorithm in the source code of the page, and reverse-engineering this to be a decryption algorithm.
