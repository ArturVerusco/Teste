variable "aws_region" {
  description = "AWS region, e.g., us-east-1"
  type        = string
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}

variable "project_tag" {
  description = "Project tag for resources"
  type        = string
  default     = "meu-site"
}

variable "ssh_key_name" {
  description = "Name for the AWS key pair"
  type        = string
  default     = "meu-site-key"
}

variable "ssh_public_key" {
  description = "Public key content (ssh-rsa / ssh-ed25519 ...)"
  type        = string
}
