package com.example.financialsforyou;

public class MortgageRequester {
    private double principal;
    private double interestRate;
    private int years;

    //sorting the getters and setters
    public double getPrincipal() {
        return principal;
    }
    public void setPrincipal(double principal) {
        this.principal = principal;
    }
    public double getInterestRate() {
        return interestRate;
    }
    public void setInterestRate(double interestRate) {
        this.interestRate = interestRate;
    }
    public int getYears() {
        return years;
    }
    public void setYears(int years) {
        this.years = years;
    }
}
