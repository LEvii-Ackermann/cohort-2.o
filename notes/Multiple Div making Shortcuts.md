**to make multiple div classes at once** -> .child\*5 \[it will make 5 div with name child]



**now to target different classes as they have same name use in css file**



.child:nth-child(3){                  //so this will target the 3rd class 

&nbsp;  color: yellow;

}



same for others also 



**also to use from last like last second or third use** 

.child:nth-last-child(3){                  //so this will target the last 3rd class 

&nbsp;  color: yellow;

}



**you can also manipulate that number like** 

.child:nth-child**(2n)  // Target every 2nd child**



.child:nth-child**(2n-1)  // Target every odd one**

