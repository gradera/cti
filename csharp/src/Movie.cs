namespace RefactoringKata
{
    public class Movie
    {
    public const int CHILDRENS = 2;
    public const int REGULAR = 0;
    public const int NEW_RELEASE = 1;

        private string title;
        private int priceCode;

        public Movie(string title, int priceCode)
        {
            this.title = title;
            this.priceCode = priceCode;
        }

        public int GetPriceCode()
        {
            return priceCode;
        }

        public void SetPriceCode(int priceCode)
        {
            this.priceCode = priceCode;
        }

        public string GetTitle()
        {
            return title;
        }
    }
}
