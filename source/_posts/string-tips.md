---
title: String类常用函数
tags:
  - C++
categories: C++
description: C++使用String类时应对各种情况的常用函数
cover: https://pic1.imgdb.cn/item/6344c31916f2c2beb182b00d.jpg
top_img: https://pic1.imgdb.cn/item/6344c31916f2c2beb182b00d.jpg
date: 2022-09-14 00:00:00
swiper_index: 2 #置顶轮播图顺序，非负整数，数字越大越靠前
---



## **begin**()

`begin()` 函数返回一个迭代器，指向字符串的第一个元素。



## end()

`end()` 函数返回一个迭代器，指向字符串的末尾（最后一个字符的下一个位置）。



## rbegin()

`rbegin()` 返回一个逆向迭代器，指向字符串的最后一个字符。



## rend()

`rend()` 函数返回一个逆向迭代器，指向字符串的开头（第一个字符的前一个位置）。



## 反转 reverse()

使用C++中 `algorithm` 头文件中的 `reverse()` ，需要传入两个参数，分别是指定需要反转区域的**首地址**和**尾地址**。

​	**Tips: **

- **(1) 字符串本身发生了改变，即返回操作后的字符串。**
- **(2) 指定区间时，是左闭右开的区间 [a,b)。**

```c++
// 整体反转
string s1 = "abcdefg";
std::reverse(s1.begin(), s1.end());
// gfedcba


// 指定一个区间段
string s1 = "abcdefg";
std::reverse(&s1[0], &s1[2]);
// bacdefg


// 也可以针对数组
int f[3] = {1, -2, 3};
reverse(&f[0], &f[2]);	// f数组为 -2 1 3
reverse(f, f+3);	// f数组变为 3 1 -2


// 对于STL中容器也一样
vector<int>f = {1,2,3,4,5};
reverse(f.begin(), f.end());	
// 5 4 3 2 1
```



## 插入 push_back()\insert()

使用string类自带的 `push_back()` 或  `insert()`。其中，`push_back()`是在字符串尾部操作，而 `insert()` 可以在字符串任意位置进行操作。

```c++
string s = "abcde";
s.push_back('f');	// 添加在尾部 abcdef
s.insert(s.begin(), '0');// 指定位置插入 0abcdef
```

**Tips:  insert()的传参情况**

```c++
// 在p0位置插入字符串s
// string &insert(int p0, const char *s);
string s = "abcde";
s.insert(2,"123");
// ab123cde


// 在p0位置插入字符串s的前n个字符
// string &insert(int p0, const char *s, int n);
string s = "abcde";
s.insert(2,"12345",3);
// ab123cde


// 在p0位置插入字符串s
// string &insert(int p0,const string &s);
string s = "abcde";
string n = "12345";
s.insert(2,n);
// ab12345cde


// 在p0位置插入字符串s从pos开始的连续n个字符   
// string &insert(int p0,const string &s, int pos, int n);
string s = "abcde";
string n = "12345";
s.insert(2,n,2,2);
// ab34cde


// 在p0处插入n个字符c
// string &insert(int p0, int n, char c);
string s = "abcde";
s.insert(2,5,'*');
// ab*****cde
```



## 字符串拼接 append()

使用string类自带的 `append()` 或者用 `+` 也可以收到同样效果。

以下代码来自C++说明文档

```c++
std::basic_string<char> str = "string";
const char* cptr = "C-string";
const char carr[] = "Two and one";
 
std::string output;
 
// 1) Append a char 3 times. 
// Notice, this is the only overload accepting chars.
output.append(3, '*');
// ***
 

//  2) Append a whole string
output.append(str);
// ***string
 

// 3) Append part of a string (last 3 letters, in this case)
output.append(str, 3, 3);	// 下标从0开始，第三个位置(i)的连续三个(ing)
// ***stringing


// 4) Append part of a C-string
// Notice, because `append` returns *this, we can chain calls together
output.append(1, ' ').append(carr, 4);	// 可以连用，后面表示加上 carr[] 的前4个，注意和string类型区别
//  ***stringing Two 
    

// 5) Append a whole C-string    
output.append(cptr);
// ***stringing Two C-string
 
    
// 6) Append range    
output.append(&carr[3], std::end(carr));	// 加上从 carr[] 的第3个位置开始，到结束
// ***stringing Two C-string and one


// 7) Append initializer list
output.append({ ' ', 'l', 'i', 's', 't' });	// 添加列表
// ***stringing Two C-string and one list
```



## 遍历(迭代器\下标)

遍历可以使用下标，也可以使用迭代器。迭代器可以是正向，也可以是反向。

```c++
string s = "abcd";
for(int i=0; i<s.size(); i++) {
    cout<<s[i]<<" ";
}

for(auto iter=s.begin(); iter<s.end(); iter++) {
    cout<<*iter<<" ";
}

for(auto riter=s.rbegin(); riter<s.rend(); riter++) {
    cout<<*riter<<" ";
}// 反向输出，得到 d c b a
```



## 删除字符 erase()

`erase()` 方法中的参数，可以使用迭代器，也可以指定索引位置。返回值是操作后的字符串。

```c++
string n = "abcdef";
n.erase(n.begin());
// bcdef
// 这里begin()返回一个迭代器，若参数是迭代器，则只删除迭代器指向的位置


std::string s = "This Is An Example";
s.erase(7, 3); // erases " An" using overload (1)
// string& erase(size_t pos=0, size_t len = npos);
// 参数pos表示要删除字符串的起始位置，其默认值是0；len表示要删除字符串的长度，其默认值是string::npos
// 删除从第7个位置开始，长度是3，不输入长度默认后面全删除完
// This Is Example


s.erase(std::find(s.begin(), s.end(), ' ')); // erases first ' '; overload (2)
// 查找第一个空格的位置，并删除
// ThisIs Example


s.erase(s.find(' ')); // trims from ' ' to the end of the string; overload (1)
// ThisIs


auto it = std::next(s.begin(), s.find('s')); // obtains iterator to the first 's'
s.erase(it, std::next(it, 2)); // erases "sI"; overload (3)
// 迭代器用法，先找到第一个s的位置，然后删除s开始的两个字符
// This
```



## 替换 replace()

```c++
// string &replace(size_t pos,size_t len,const &str)
// 被替换位置(pos之后len长度)
string s = "0123456";
string str = "ABCD";
s.replace(2, 2, str);
// ”23”被替换为"ABCD"
// 01ABCD456

// string &replace(size_t pos,size_tlen,const string &str,size_t subpos,size_t sublen)
// 被替换位置(pos之后len长度)，替换位置（subpos之后sublen长度）
string s = "0123456";
string str = "ABCD";
s.replace(2, 2, str, 1, 2);
// “23”被替换为“BC”
// 01BC456

// string &replace(size_t pos,size_t len,const char* s)
// 插入char字符串
string s = "0123456";
char str[] = "ABCD";
s.replace(2, 2, str);
// “23”被替换为char字符串
// 01ABCD456

// string &replace（size_t pos,size_t len,const char* cch,size_t n）
// 插入char字符串的前n个字符
string s = "0123456";
s.replace(2, 2, "ABCD", 2);
// “23”被替换为“AB”
// 01AB456

// string &replace(size_t pos, size_t len, size_t n, char c)
string s = "0123456";
s.replace(2, 2, 5, 'A');
// "23"被替换为5个A
// 01AAAAA456

// 和迭代器相关
// string &replace(const_iterator first,const_iterator last,const string&str)
// string &replace(const_iterator first,const_iterator last,const char* cch)
// string &replace(const_iterator first,const_iterator last,const char* cch,size_t n)
// string &replace(const_iterator first,const_iterator last,size_t n,char c)
// 第二个参数不再是len而是位置
string s = "0123456";
string str = "ABCD";  
string::iterator it= s.begin();
s.replace(it, it+2, str);
// it指向0位置，it+2指向2，也是左闭右开区间[0,2)
// "01"被替换为"ABCD"
// ABCD23456
```



## 删除所有空格

通过 `remove()` 配合 `erase()`，要引用 `algorithm`

```c++
string str = "a b c d e f g";
str.erase(std::remove(str.begin(), str.end(), ' '), str.end());
// abcdefg
```



## 转大小写

```c++
string s = "abcd";
for(int i=0; i<s.size(); i++) s[i] = toupper(s[i]);
// ABCD
transform(s.begin(), s.end(), s.begin(), ::tolower);
// 前两个参数给定区间，第三个参数给定写入位置，最后参数给定执行操作
// abcd
```



## 查找子串位置 find()

```c++
// int find(str,position);

string s = "hello world!";
cout << s.find("e") << endl;
// 1


string s = "hello world!";
if (s.find("a") == s.npos) {
    cout << "not found" << endl;
}
// not found


string s = "hello world!";
cout << s.find("l",5) << endl;
// 从第5个位置开始查找
// 9
```

**拓展用法**

```c++
string s = "hello world!";
cout << s.find_first_of("l") << endl;//第一次出现的位置
cout << s.find_last_of("l") << endl;//最后一次出现的位置
// 2
// 9

string s = "hello world!";
cout << s.rfind("l") << endl;//即从后往前第一次出现"l"的位置
// 9
// 通常可以这样来使用，当正向查找与反向查找得到的位置不相同说明子串不唯一。

//查找s中flag出现的所有位置
string s("hello world!");
string flag="l";
int position=0;
int i=1;
while((position=s.find(flag,position))!=string::npos){
	cout<<"position  "<<i<<" : "<<position<<endl;
	position++;
	i++;
}
// position  1 : 2
// position  2 : 3
// position  3 : 9
```



## 截取子串 substr()

```c++
// basic_string substr(size_type _Off = 0,size_type _Count = npos) const;
string s="abcdefg12345";
string res;
res=s.substr();
// res="abcdefg12345"


string s="abcdefg12345";
string res;
res=s.substr(1);
// 从位置1开始截取，默认截取完
// res="bcdefg12345"


string s="abcdefg12345";
string res;
res=s.substr(2,4);
// 从位置2开始截取，截取4个
// res="cdef"
```

**Tips:**

- 如果起始位置超过字符串大小，则抛出out of range异常
- 如果起始位置加上截取长度超过字符串大小，只截取到末尾

