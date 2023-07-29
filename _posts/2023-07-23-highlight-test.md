---
layout: post
title: Code Highlight Test
date:   2023-07-28 03:07
description: A test page to see how the syntax highlighting looks
toc: True
tags: [test]
---

<br>

This page is to see how my code highlighting looks. 

The color theme I was going for was the [Dark Material](https://github.com/yuchiu/Default-Material-Dark-Theme), which is used in VSCode. 

I was also looking mostly at Python code, and going to make that look the best.

Most of this code is take from [Syntax Highlighting Samples](https://github.com/uloco/syntax-highlighting-samples).

<br>

# CSS

```css
@import "manual.css";

@font-face {
  font-family: DroidSans;
  src: url(DroidSans.ttf);
  unicode-range: U+000-5FF, U+1e00-1fff, U+2000-2300;
}

h1.mystyle:lang(en) {
  color:blue; /* TODO: change THIS to yellow for next version! */
  border:rgb(255,0,0);
  background-color: #FAFAFA;
  background:url(hello.jpg) !important;
}

div > p, p ~ ul, input[type="radio"] {
  color: green;
  width: 80%;
}

#header:after {
  color: red;
}

.jockl {

}
```

<br>

# HTML

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2//EN">
<!--
*        Sample comment
-->
<html>
  <head>
    <title>IntelliJ IDEA</title>
  </head>
  <body>
    <h1>IntelliJ IDEA</h1>
    <p>
      <br /><b
        ><img border="0" height="12" src="images/hg.gif" width="18" /> What is
        IntelliJ&nbsp;IDEA? &#x00B7; &Alpha; </b
      ><br /><br />
    </p>
    <div>hello</div>
  </body>
</html>
<script>
  const foo = "123";
</script>
```

<br>

# Javascript

```js
var globalVar;
/**
 * Constructor for <code>AjaxRequest</code> class
 * @param url the url for the request<p/>
 */
function AjaxRequest(url) {
  var urls = ["www.cnn.com", 5, globalVar];
  this.request = new XMLHttpRequest();
  url = url.replace(/^\s*(.*)/, "$1"); // skip leading whitespace
  /* check the url to be in urls */
  var a = "\u1111z\n\u11ac";
  this.foo = new (function() { })();
  let a = true && false;
  foo();
  // #
  const cons = "abc";
  let a = true;
  console.log(cons);
}
let myObj = {
  first: "first",
  second: 3,
  o: {
    hello: "world",
  },
};

typeof "nice";
new Class();
class NameClass { }
foo({ abc: "abcde" });
foo.bar({ foo: "abc" });
obj.abc = function() { };

async () => {
  await Promise.resolve();
};
```

<br>

# Java

```java
/* Block comment */
import java.util.Date;
/**
 * Doc comment here for <code>SomeClass</code>
 * @param T type parameter
 * @see Math#sin(double)
 */
@Annotation (name=value)
public class SomeClass<T extends Runnable> { // some comment
  private T field = null;
  private double unusedField = 12345.67890;
  private UnknownType anotherString = "Another\nStrin\g";
  public static int staticField = 0;
  public final int instanceFinalField = 0;

  public SomeClass(AnInterface param, int[] reassignedParam) {
    int localVar = "IntelliJ"; // Error, incompatible types
    System.out.println(anotherString + toString() + localVar);
    long time = Date.parse("1.2.3"); // Method is deprecated
    int reassignedValue = this.staticField;
    reassignedValue ++;
    field.run();
    new SomeClass() {
      {
        int a = localVar;
      }
    };
    reassignedParam = new ArrayList<String>().toArray(new int[0]);
  }
}
enum AnEnum { CONST1, CONST2 }
interface AnInterface {
  int CONSTANT = 2;
  void method();
}
abstract class SomeAbstractClass {
}
```

<br>

# JSON

```json
{
  "the only keywords are": [true, false, null],
  "strings with": {
    "no excapes": "pseudopolinomiality",
    "valid escapes": "C-style\r\n and unicode\u0021",
    "illegal escapes": "\0377\x"
  },
  "some numbers": [
    42,
    -0.0e-0,
    6.626e-34
  ] 
  // Line comments are not included in standard but nonetheless allowed.
  /* As well as block comments. */
  "some numbers": [
    42,
    -0.0e-0,
    6.626e-34
  ] 
}
```

<br>

# Bash

```bash
#!/bin/bash

# This script does nothing in particular
# It somehow manages to include most of Bash's syntax elements :)

# Computes the number 42 using Bash
function compute42() {
    echo $((2 * 3 * (3 + 4)))
}

# Computes the number 42 using a subshell command
function compute42Subshell() {
    echo "$(echo "2*3*(3+4)" | bc)"
}

# Subtract the second parameter from the first and outputs the result
# It can only handle integers
function subtract() {
    local a=${1:?"First param not set"}
    local b=${2:?"Second param not set"}

    echo -n "$((a - b))"
}

echo 'The current working directory is: '" ${PWD}"

echo "100 - 58 = $(subtract 100 58)"

fortyTwo=$(compute42)
echo "$fortyTwo is 42"

fortyTwo=$(compute42Subshell)
echo "${fortyTwo} is 42"

echo "6 * 7 is $fortyTwo"  > log.txt 2>&1

echo `echo This is an echo`

empty=""
[ -z "$empty" ]  && This variable is empty!

cat -  << EOF
    Dear Mr. X,
    this is a message to you.

    With kind regards,
    Mr. Y
EOF
```

<br>

# C++

```cpp
#include <iostream>
#include <fstream>
#include <string>
#include <map>
#include <vector>

using namespace std;

void InitMap(map<string, vector<string> > &svmap, ifstream &ifile)
{
	string textline;
	while (getline(ifile, textline, '\n')) {
		string familyName;
		vector<string> child;
		string::size_type nowPos = 0, prevPos = 0, textSize = textline.size();
		if (!textSize)
			continue;
		while ((nowPos = textline.find_first_of(' ', nowPos)) != string::npos) {
			string::size_type endPos = nowPos - prevPos;
			if (!prevPos)
				familyName = textline.substr(prevPos, endPos);
			else
				child.push_back(textline.substr(prevPos, endPos));
			prevPos = ++nowPos;
		}
		if (prevPos < textSize)
			child.push_back(textline.substr(prevPos, nowPos - prevPos));
		if (!svmap.count(familyName))
			svmap[familyName] = child;
		else
			cerr << "Sorry, we already have a "<< familyName << " family in our map!\n";
	}
}

void DisplayMap(map<string, vector<string> > &svmap, ofstream &ofile)
{
	for (map<string, vector<string> >::iterator itr = svmap.begin(), mapEnd = svmap.end(); itr != mapEnd; ++itr) {
		ofile << "The " << itr->first << " family ";
		if (itr->second.empty())
			ofile << "has no children." << endl;
		else {
			ofile << "has " << itr->second.size() << " children: ";
			for (vector<string>::iterator itrvec = itr->second.begin(), vecEnd = itr->second.end(); itrvec != vecEnd; ++itrvec)
				ofile << *itrvec << " ";
			ofile << endl;
		}
	}
}

void UserQuery(map<string, vector<string> > &svmap)
{
	string queryName;
	cout << "Please enter a family name you want to query: ";
	cin >> queryName;
	int i = 0;
	for (map<string, vector<string> >::iterator itr = svmap.begin(), mapEnd = svmap.end(); itr != mapEnd; ++itr) {
		i++;
		if (itr->first == queryName) {
			cout << "The " << itr->first << " family has " << itr->second.size() << " children: ";
			for (vector<string>::iterator itrvec = itr->second.begin(), vecEnd = itr->second.end(); itrvec != vecEnd; ++itrvec)
				cout << *itrvec << " ";
			break;
		}
	}
	if (i >= svmap.size())
		cout << "Sorry, the " << queryName << " family is not found." << endl;
}

int main(int argc, char *argv[])
{
	ifstream readFile("TestFile_3.3.txt");
	ofstream writeFile("TestFile_3.3.map");
	if (!readFile.is_open() || !writeFile.is_open()) {
		cerr << "Sorry, the file fails to read!" << endl;
		return -1;
	}
	map<string, vector<string> > mapFamily;
	InitMap(mapFamily, readFile);
	DisplayMap(mapFamily, writeFile);
	UserQuery(mapFamily);
	return 0;
}
```

<br>

# Python

```py
@decorator(param=1)
def f(x):
    """ Syntax Highlighting Demo
        @param x Parameter"""
    s = ("Test", 2+3, {'a': 'b'}, x)   # Comment
    print s[0].lower()
    for t in s:
        if t in s:
            print('sorry') 
            x & s


class Foo:
    def __init__(self):
        byte_string = 'newline:\n also newline:\x0a'
        text_string = u"Cyrillic Я is \u042f. Oops: \u042g"
        self.makeSense(whatever=1)

    def makeSense(self, whatever):
        self.sense = whatever
        if True:
            pass

x = len('abc')
print(f.__doc__)

# nested `in` operator
requested toppings = ['mushrooms', 'french fries', 'extra cheese']
for requested_topping in requested_toppings:

    if requested topping in available toppings:

    print (f'Sorry, we do not have {requested_topping}')
    print('Infinished making your pizza!')
```

<br>

# Rust

```rs
use syntect::easy::HighlightLines;
use syntect::parsing::SyntaxSet;
use syntect::highlighting::{ThemeSet, Style};
use syntect::util::{as_24_bit_terminal_escaped, LinesWithEndings};

fn print_square(num: f64) {
  let result = f64::powf(num, 2.0);
  println!("The square of {:.2} is {:.2}.", num, result);
}

// Load these once at the start of your program
let ps = SyntaxSet::load_defaults_newlines();
let ts = ThemeSet::load_defaults();

fn jockl(a:int) {

}

let syntax = ps.find_syntax_by_extension("rs").unwrap();
let mut h = HighlightLines::new(syntax, &ts.themes["base16-ocean.dark"]);
let s = "pub struct Wow { hi: u64 }\nfn blah() -> u64 {}";
for line in LinesWithEndings::from(s) {
    let ranges: Vec<(Style, &str)> = h.highlight_line(line, &ps).unwrap();
    let escaped = as_24_bit_terminal_escaped(&ranges[..], true);
    print!("{}", escaped);
}
```