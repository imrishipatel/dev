package com.learningArrays;

public class bubbleSort {
    public static void main(String[] args) {

        int[] intArray = {2, -3, 4, 55, 67, -34, 89, 100};

        for (int unsortedPartitionIndex = intArray.length - 1 ; unsortedPartitionIndex > 0 ; unsortedPartitionIndex--){
            for(int i = 0 ; i < unsortedPartitionIndex ; i++){

                if(intArray[i] > intArray[i+1]){
                    swap(intArray, i, i + 1);
                }
            }
        }

        for (int i = 0 ; i < intArray.length ; i++){
            System.out.println(intArray[i]);
        }

    }

    public static void swap(int[] intArray, int i , int j){

        if(i == j){
            return;
        }

        int temp = intArray[i];
        intArray[i] = intArray[j];
        intArray[j] = temp;
    }


}
