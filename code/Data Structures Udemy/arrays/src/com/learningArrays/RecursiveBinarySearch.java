package com.learningArrays;

import java.util.Scanner;

public class RecursiveBinarySearch {

    static int RecursiveApproach(int low, int middle, int high, int key, int a[]){
        if(low == high){
            if(a[low] == key){
                return low;
            else
              return 0;

        }



    }

    public static void main(String[] args) {
        int array[] = {23,6,8,12,14,17,25,29,31,36,42,47,53,55,62};
        int l, h, mid, key;
        l = 0 ;
        h = array.length - 1;
        mid = (int) Math.floor((l + h) / 2);
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the element you are looking for: " );
        key = sc.nextInt();



    }


}
