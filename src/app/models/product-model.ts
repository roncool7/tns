export class ProductModel {
  public constructor(
    public Product_ID?: number,
    public Product_Name?: string,
    public Product_Price?: number,
    public Product_Desc?: string,
    public Product_Image?: string,
    public Product_Category?: string,
    public Product_Age?: string,
    public Product_In_Stock?: number,
    public Supplier_ID ?: number,
    public Category_ID  ?: number,
    public Brand_ID   ?: number,
  ) {}
}
