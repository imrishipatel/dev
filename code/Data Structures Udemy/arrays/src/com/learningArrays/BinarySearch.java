package com.learningArrays;

import java.util.Scanner;

public class BinarySearch {
    public static void main(String[] args) {
        int array[] = {23,6,8,12,14,17,25,29,31,36,42,47,53,55,62};
        int l = 0;
        int h = array.length - 1;
        int mid, key;
        int solution = 0;
        Scanner sc = new Scanner(System.in);

        boolean check = true;

        System.out.println("Enter the element you are looking for: " );
        key = sc.nextInt();


        while (check) {
            System.out.println("Enter the element you are looking for or press 404 to exit: " );
            key = sc.nextInt();

            if (key == 404)
                check = false;
            else
                while (l <= h){

                    mid = (int) Math.floor((l + h) / 2);
                    if(key == array[mid]){
                        solution = mid;
                    }

                    if(key < array[mid]){
                        h = mid - 1;
                    }
                    else
                        l = mid + 1 ;
                }
            System.out.println("The value is at index: " + (solution + 1));

        }


    }
}
