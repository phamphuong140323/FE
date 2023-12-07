import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Cascader, Checkbox, Col, Form, Input, notification, Row, Select, Space } from 'antd';
import { InputNumber } from 'antd'
import { useAddProductMutation } from '@/api/product';
import { useGetSizesQuery } from '@/api/sizes';
import { useGetImageProductsQuery } from '@/api/imageProduct';
import { useGetCategorysQuery } from '@/api/category';
import { ISize } from '@/interfaces/size';
import { ICategory } from '@/interfaces/category';
import { ImageProduct } from '@/interfaces/imageProduct';
import { useGetColorsQuery } from '@/api/color';
import { ISale } from '@/types';
import { useGetAllSalesQuery } from '@/api/sale/sale.api';
import { IColor } from '@/interfaces/color';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import UpLoand from "../../Image/UploadImageTintuc"

  

const { Option } = Select;

const AddProduct: React.FC = () => {
    const navigate = useNavigate();
    const [addproduct] = useAddProductMutation();
    const { data: size } = useGetSizesQuery();
    const {data: image} = useGetImageProductsQuery();
    const {data: category} = useGetCategorysQuery();
    const {data: color} = useGetColorsQuery();
    const {data: sale} = useGetAllSalesQuery();
    const [img, setImg] = useState<any>([]);
    const handleImage = (url: string) => {
      setImg([...img, url]);
    };
    const handleImageRemove = (url: string) => {
      setImg((prevImg: any) => prevImg.filter((imageUrl: string) => imageUrl !== url));
    };
    console.log(sale);
    
    const { TextArea } = Input;

    console.log(color);

    const onFinish = (products: any) => {
        console.log(products);
        const product= {
            name: products.name,
            price: products.price,
            image: img,
            description: products.description,
            quantity: products.quantity,
            sale: products.sale,
            categoryId: products.categoryId,
            trang_thai: "active",
            colorSizes: products.colorSizes.map((colorSize: any) => ({
                color: colorSize.color,
                sizes: colorSize.size.map((size: string) => ({ size }))
            }))
        }
       
        
        // return;
        addproduct(product as any);
        

        navigate('/admin/product');
        notification.success({
            message: 'Success',
            description: 'Thêm sản phẩm thành công',
        });
    };
   

    return (
        <div>
             <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 800, margin: '0 auto' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Row gutter={20}>
                <Col span={12}>
                <Form.Item
                    label="Product Name"
name="name"
                    rules={[{ required: true, message: 'Please input your Name Product!' }, { min: 5, message: 'Product Name must be at least 5 characters.' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your Price Product!' }, { validator: (_, value) => (!value || !isNaN(Number(value))) ? Promise.resolve() : Promise.reject('Price must be a number') }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Trạng thái" name="trang_thai">
                    <Select>
                        <Select.Option value="active">active</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="category"
                    name="categoryId"
                >
                    <Select placeholder="Select a size">
                        {category?.data?.map((categoryId: ICategory) => (
                            <Option key={categoryId._id} value={categoryId._id}>
                                {categoryId.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item label="Sale" name="sale">
                    <InputNumber />
                </Form.Item>
                <Form.List name="colorSizes">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'color']}
                                        rules={[{ required: true, message: 'Missing color' }]}
                                    >
                                        <Select placeholder="Color" style={{width: 120}}>
                                            {color?.color?.map((color: IColor) => (
                                                <Option key={color._id} value={color._id}>
                                                    {color.name}
                                                </Option>
                                            ))}
</Select>
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'size']}
                                        rules={[{ required: true, message: 'Missing size' }]}
                                    >
                                        <Select mode='multiple' placeholder="Size" style={{width: 80}}>
                                            {size?.map((size: ISize) => (
                                                <Option key={size._id} value={size._id}>
                                                    {size.name}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Add ColorSize
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.Item label="Quanlity" name="quantity">
                    <InputNumber />
                </Form.Item>
               
                </Col>
                <Col span={12}>
                <Form.Item
                    label="Image"
                    name="image"
                    // rules={[{ required: true, message: 'Please input your Image Product!' }]}
                >
                  <UpLoand onImageUpLoad={handleImage} onImageRemove={handleImageRemove} />
                </Form.Item>
                
                    <Form.Item label="Description" name="description">
                        <TextArea rows={4} />
                    </Form.Item>
                    
                </Col>
                </Row>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button  htmlType="submit">
                        Add New Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddProduct;